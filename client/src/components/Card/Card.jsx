import { NavLink } from "react-router-dom";
import styledCard from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFavorite, removeFavorite } from "../../redux/actions";
export default function Card(props) {
  const { character, handlerDelete, parent } = props;

  const dispatch = useDispatch();
  const myFavorites = useSelector((store) => store.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const markFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFavorite(character.id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(character));
    }
  };

  const deleteCharacter = () => {
    const char = myFavorites.find((fav) => fav.id === character.id);
    if (char) {
      dispatch(removeFavorite(character.id));
    }
    handlerDelete(character.id);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

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
