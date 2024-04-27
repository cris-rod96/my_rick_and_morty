import { useDispatch, useSelector } from "react-redux";
import { characterEndpoints } from "../api/character.api";
import { addCharacter } from "../redux/slices/character.slice";

const useNav = () => {
  const { myCharacters } = useSelector((state) => state.characters);
  const characterNotExists = (characterID) => {
    return (
      myCharacters.find((character) => character.id === Number(characterID)) ===
      undefined
    );
  };

  const dispatch = useDispatch();

  const onSearch = (characterID, toast) => {
    if (characterID) {
      if (characterID < 1 || characterID > 826) {
        toast.error("Rango no permitido. Entre 1 y 826");
        return;
      }
      if (!characterNotExists(characterID)) {
        toast.error("Personaje ya agregado");
        return;
      }

      characterEndpoints
        .getByID(characterID)
        .then((res) => {
          dispatch(addCharacter(res.data));
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  };
  const onSearchRandom = (toast) => {
    const randomID = Math.floor(Math.random() * (826 - 1 * 1) + 1);
    if (characterNotExists(randomID)) {
      characterEndpoints
        .getByID(randomID)
        .then((res) => {
          dispatch(addCharacter(res.data));
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } else {
      onSearchRandom();
    }
  };

  return {
    onSearch,
    onSearchRandom,
  };
};

export default useNav;
