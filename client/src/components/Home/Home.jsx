import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Empty from "../Empty/Empty";
import styledHome from "./Home.module.css";
import { useEffect } from "react";
import { utilStorage } from "../../utils";
import { favoriteEndpoints } from "../../api/favorite.api";
import { addFavorite, saveFavorites } from "../../redux/slices/favorite.slice";
export default function Home({ handlerDelete }) {
  const { myCharacters } = useSelector((state) => state.characters);
  const { myFavorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  console.log(myFavorites);
  useEffect(() => {
    const { id } = utilStorage.getDataStorage("user-session");
    if (id) {
      favoriteEndpoints
        .getAllFavorites(id)
        .then((res) => {
          dispatch(saveFavorites(res.data));
        })
        .catch((err) => {});
    }
  }, []);

  return myCharacters ? (
    <div className={styledHome.containerHome}>
      {myCharacters.length === 0 ? (
        <div className={styledHome.containerEmpty}>
          <Empty parent="Home" />
        </div>
      ) : (
        <div className={styledHome.containerCards}>
          {myCharacters.length > 0 &&
            myCharacters.map((character, idx) => {
              return (
                <Card
                  character={character}
                  handlerDelete={handlerDelete}
                  key={idx}
                  parent="Home"
                  isFav={
                    myFavorites.find(
                      (favorite) => favorite.id === character.id
                    ) !== undefined
                  }
                />
              );
            })}
        </div>
      )}
    </div>
  ) : (
    ""
  );
}
