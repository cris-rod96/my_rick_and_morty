import { AxiosError } from "axios";
import { favoriteEndpoints } from "../api/favorite.api";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorites } from "../redux/slices/favorite.slice";
import useHome from "./useHome";

const useCard = (toast) => {
  const dispatch = useDispatch();
  const { handlerDelete } = useHome();
  const { myFavorites } = useSelector((state) => state.favorites);
  const markFavorite = (userID, character, isFav) => {
    if (isFav) {
      favoriteEndpoints
        .removeFavorite(userID, character.id)
        .then(() => {
          dispatch(removeFavorites(character.id));
          toast.success("Personaje eliminado de la lista de favoritos");
        })
        .catch((err) => {
          if (err instanceof AxiosError) {
            toast.error(err.response.data.message);
          }
        });
    } else {
      favoriteEndpoints
        .saveFavorite(userID, character.id)
        .then(() => {
          dispatch(addFavorite(character));
          toast.success("Personaje agregado a la lista de favoritos");
        })
        .catch((err) => {
          if (err instanceof AxiosError) {
            toast.error(err.response.data.message);
          }
        });
    }
  };

  const deleteCharacter = (character, userID) => {
    let message = "Personaje eliminado de los agregados ";
    handlerDelete(character.id);
    const foundFavorite = myFavorites.find(
      (favorite) => favorite.id === Number(character.id)
    );
    if (foundFavorite) {
      favoriteEndpoints
        .removeFavorite(userID, character.id)
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
  return { markFavorite, deleteCharacter };
};

export default useCard;
