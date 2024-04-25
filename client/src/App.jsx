import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import Detail from "./components/Detail/Detail";
import Favorite from "./components/Favorites/Favorite";
import "react-toastify/dist/ReactToastify.css";

import About from "./components/About/About";
import { BASE_URL } from "./config";
import { utilStorage } from "./utils";
import { authEndpoints } from "./api/auth.api";
import { useDispatch, useSelector } from "react-redux";
import {
  addCharacter,
  removeCharacter,
  saveCharacters,
} from "./redux/slices/character.slice";
import { favoriteEndpoints } from "./api/favorite.api";
import { saveFavorites } from "./redux/slices/favorite.slice";
import { characterEndpoints } from "./api/character.api";

import { Toaster, toast } from "sonner";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { myFavorites } = useSelector((state) => state.favorites);
  const { myCharacters } = useSelector((state) => state.characters);

  console.log(myFavorites);
  const characterNotExists = (id) => {
    return (
      myCharacters.find((character) => character.id === Number(id)) ===
      undefined
    );
  };

  const onSearch = (id) => {
    if (id < 1 || id > 826) {
      toast.error("Rango no permitido. Entre 1 y 826");
      return;
    }
    if (!characterNotExists(id)) {
      toast.error("Personaje ya agregado");
      return;
    }

    characterEndpoints
      .getByID(id)
      .then((res) => {
        dispatch(addCharacter(res.data));
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };
  const onSearchRandom = () => {
    const randomID = Math.floor(Math.random() * (826 - 1 * 1) + 1);
    if (characterNotExists(randomID)) {
      characterEndpoints
        .getByID(randomID)
        .then((res) => {
          dispatch(addCharacter(res.data));
        })
        .catch(console.log);
    } else {
      onSearchRandom();
    }
  };
  const logOut = () => {};
  const handlerDelete = () => {};
  const login = (credentials) => {
    authEndpoints
      .login(credentials.email, credentials.password)
      .then((res) => {
        const { access, message, user } = res.data;
        utilStorage.saveDataStorage("access", access);
        utilStorage.saveDataStorage("user-session", user);
        toast.success(message);
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  useEffect(() => {
    const charactersAdded = utilStorage.getDataStorage("characters_added");
    if (charactersAdded !== null) dispatch(saveCharacters(charactersAdded));
    else dispatch(saveCharacters([]));
  }, []);

  return (
    <div>
      <Toaster richColors />
      {pathname !== "/" ? (
        <Nav
          onSearch={onSearch}
          onSearchRandom={onSearchRandom}
          logOut={logOut}
        />
      ) : null}
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="/home"
          element={<Home handlerDelete={handlerDelete} loading={loading} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/favorites"
          element={<Favorite handlerDelete={handlerDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
