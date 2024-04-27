import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Empty from "../Empty/Empty";
import styledHome from "./Home.module.css";
import { useEffect } from "react";
import { utilStorage } from "../../utils";
import PropTypes from "prop-types";
import { Toaster, toast } from "sonner";
import useHome from "../../hooks/useHome";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const { handlerDelete, fetchFavorites, fetchCharacters } = useHome();
  const navigate = useNavigate();
  const { myCharacters } = useSelector((state) => state.characters);
  const { myFavorites } = useSelector((state) => state.favorites);

  useEffect(() => {
    const access = utilStorage.getDataStorage("access");
    if (!access) {
      toast.error("Acceso denegado. Debes iniciar sesión");
      navigate("/auth/login");
    } else {
      const userSession = utilStorage.getDataStorage("user-session");
      if (userSession) {
        fetchFavorites(userSession.id, toast);
        fetchCharacters();
      }
    }
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
