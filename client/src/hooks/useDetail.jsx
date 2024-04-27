import { useSelector } from "react-redux";
import { characterEndpoints } from "../api/character.api";
import { useState } from "react";
import { AxiosError } from "axios";

const useDetail = () => {
  const [character, setCharacter] = useState({});
  const [available, setAvailable] = useState(false);
  const { myCharacters } = useSelector((state) => state.characters);
  const isCharacterAdded = (characterID) => {
    return (
      myCharacters.find((character) => character.id === Number(characterID)) !==
      undefined
    );
  };

  const getCharacterByID = (id, toast) => {
    if (isCharacterAdded(id)) {
      characterEndpoints
        .getByID(id)
        .then((res) => {
          setCharacter(res.data);
          setAvailable(true);
          toast.success("hi");
        })
        .catch((err) => {
          if (err instanceof AxiosError) {
            toast.error(err.response.data.message);
          } else {
            toast.error("Error desconocido");
          }
        });
    }
  };

  return { getCharacterByID, character, available };
};

export default useDetail;
