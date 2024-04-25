import { NavLink } from "react-router-dom";
import styledCard from "./Card.module.css";
import { utilStorage } from "../../utils";
import { favoriteEndpoints } from "../../api/favorite.api";
import { useDispatch } from "react-redux";
import {
  removeFavorites,
  addFavorite,
} from "../../redux/slices/favorite.slice";
export default function Card(props) {
  const { character, isFav } = props;
  const { id } = utilStorage.getDataStorage("user-session");
  const dispatch = useDispatch();
  const markFavorite = () => {
    if (isFav) {
      favoriteEndpoints
        .removeFavorite(id, character.id)
        .then(() => {
          dispatch(removeFavorites(character.id));
        })
        .catch(console.log);
    } else {
      favoriteEndpoints
        .saveFavorite(id, character.id)
        .then(() => {})
        .catch(addFavorite(character));
    }
  };
  return (
    <div
      className={`${styledCard.card} ${
        character.status === "Dead" ? styledCard.cardDead : styledCard.cardAlive
      }`}
    >
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
