import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Empty from "../Empty/Empty";
import styledHome from "./Home.module.css";
import { useEffect } from "react";
import { utilStorage } from "../../utils";
import { favoriteEndpoints } from "../../api/favorite.api";
import { saveFavorites } from "../../redux/slices/favorite.slice";
import PropTypes from "prop-types";
import { Toaster, toast } from "sonner";
export default function Home({ handlerDelete }) {
  const { myCharacters } = useSelector((state) => state.characters);
  const { myFavorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = utilStorage.getDataStorage("user-session");
    if (id) {
      favoriteEndpoints
        .getAllFavorites(id)
        .then((res) => {
          dispatch(saveFavorites(res.data));
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    }
  }, [dispatch]);

  useEffect(() => {
    const access = utilStorage.getDataStorage("access");
    if (!access) toast.error("Acceso denegado. Debes iniciar sesión");
  }, []);

  return myCharacters ? (
    <div className={styledHome.containerHome}>
      <Toaster richColors />
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

Home.propTypes = {
  handlerDelete: PropTypes.func.isRequired,
};
