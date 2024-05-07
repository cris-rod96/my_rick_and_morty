import { NavLink } from "react-router-dom";
import styledCard from "./Card.module.css";
import { utilStorage } from "../../utils";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import useCard from "../../hooks/useCard";
export default function Card(props) {
  
  const { toast } = useOutletContext();
  const { markFavorite, deleteCharacter } = useCard(toast);
  const { character, isFav, parent } = props;
  const userSession = utilStorage.getDataStorage("user-session");

  const handlerFavorites = () => {
    markFavorite(userSession.id, character, isFav);
  };
  const handlerDelete = () => {
    deleteCharacter(character, userSession.id);
  };

  return (
    <div
      className={`${styledCard.card} ${
        character.status === "Dead" ? styledCard.cardDead : styledCard.cardAlive
      }`}
    >
      <div className={styledCard.cardHeader}>
        {parent === "Home" ? (
          <button className={styledCard.btnDelete} onClick={handlerDelete}>
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
          <p onClick={handlerFavorites}>❤️</p>
        ) : (
          <p onClick={handlerFavorites}>🤍</p>
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
