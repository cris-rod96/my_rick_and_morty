import { useDispatch } from "react-redux";
import {
  removeCharacter,
  saveCharacters,
} from "../redux/slices/character.slice";
import { favoriteEndpoints } from "../api/favorite.api";
import { saveFavorites } from "../redux/slices/favorite.slice";
import { utilStorage } from "../utils";

const useHome = () => {
  const dispatch = useDispatch();

  const handlerDelete = (characterID) => {
    dispatch(removeCharacter(characterID));
  };

  const fetchFavorites = (userID, toast) => {
    favoriteEndpoints
      .getAllFavorites(userID)
      .then((res) => {
        dispatch(saveFavorites(res.data));
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  const fetchCharacters = () => {
    const characters_added = utilStorage.getDataStorage("characters_added");
    if (characters_added) {
      dispatch(saveCharacters(characters_added));
    }
  };

  return {
    handlerDelete,
    fetchFavorites,
    fetchCharacters,
  };
};

export default useHome;
