import { NavLink } from "react-router-dom";
import styledCard from "./Card.module.css";
import { utilStorage } from "../../utils";
import { favoriteEndpoints } from "../../api/favorite.api";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFavorites,
  addFavorite,
} from "../../redux/slices/favorite.slice";

import PropTypes from "prop-types";
import { Toaster, toast } from "sonner";
export default function Card(props) {
  const { character, isFav, handlerDelete, parent } = props;
  const { myFavorites } = useSelector((state) => state.favorites);
  const userSession = utilStorage.getDataStorage("user-session");
  const dispatch = useDispatch();
  const markFavorite = () => {
    if (userSession) {
      const { id } = userSession;
      if (isFav) {
        favoriteEndpoints
          .removeFavorite(id, character.id)
          .then(() => {
            dispatch(removeFavorites(character.id));
            toast.success("Personaje eliminado de la lista de favoritos");
          })
          .catch((err) => {
            toast.error(err.response.data.message);
          });
      } else {
        favoriteEndpoints
          .saveFavorite(id, character.id)
          .then(() => {
            dispatch(addFavorite(character));
            toast.success("Personaje agregado a la lista de favoritos");
          })
          .catch((err) => {
            toast.error(err.response.data.message);
          });
      }
    }
  };

  const deleteCharacter = async () => {
    let message = "Personaje eliminado de los agregados ";
    handlerDelete(character.id);
    const foundFavorite = myFavorites.find(
      (favorite) => favorite.id === Number(character.id)
    );
    if (foundFavorite) {
      favoriteEndpoints
        .removeFavorite(userSession.id, character.id)
        .then(() => {
          dispatch(removeFavorites(character.id));
          message += "y de los favoritos";
          toast.success(message);
          return;
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          return;
        });
    } else {
      toast.success(message);
    }
  };

  return (
    <div
      className={`${styledCard.card} ${
        character.status === "Dead" ? styledCard.cardDead : styledCard.cardAlive
      }`}
    >
      <Toaster richColors />
      <div className={styledCard.cardHeader}>
        {parent === "Home" ? (
          <button className={styledCard.btnDelete} onClick={deleteCharacter}>
            X
          </button>
        ) : null}
      </div>
      <div className={styledCard.cardInfo}>
        <NavLink to={`/detail/${character.id}`}>
          <img
            src={character.image}
            alt={character.name}
            className={`${styledCard.characterImage} ${
              character.status === "Dead"
                ? styledCard.borderDead
                : styledCard.borderAlive
            }`}
          />
        </NavLink>

        <p className={styledCard.characterName}>{character.name}</p>
      </div>
      <div
        className={`${styledCard.cardFooter} ${
          character.status === "Dead"
            ? styledCard.cardFooterDead
            : styledCard.cardFooterAlive
        }`}
      >
        <p className={styledCard.characterStatus}>{character.status}</p>
        {isFav ? (
          <p onClick={markFavorite}>❤️</p>
        ) : (
          <p onClick={markFavorite}>🤍</p>
        )}
      </div>
    </div>
  );
}
Card.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  isFav: PropTypes.bool.isRequired,
  handlerDelete: PropTypes.func,
  parent: PropTypes.string.isRequired,
};
