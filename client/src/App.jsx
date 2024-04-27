import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Error from "./components/Error/Error";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import Detail from "./components/Detail/Detail";
import Favorite from "./components/Favorites/Favorite";
import "react-toastify/dist/ReactToastify.css";

import About from "./components/About/About";
import { utilStorage } from "./utils";
import { authEndpoints } from "./api/auth.api";
import { useDispatch, useSelector } from "react-redux";
import {
  addCharacter,
  removeCharacter,
  saveCharacters,
} from "./redux/slices/character.slice";
import { characterEndpoints } from "./api/character.api";

import { Toaster, toast } from "sonner";

function App() {
  const [access, setAccess] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { myCharacters } = useSelector((state) => state.characters);
  const characterNotExists = (id) => {
    return (
      myCharacters.find((character) => character.id === Number(id)) ===
      undefined
    );
  };

  const onSearch = (id) => {
    if (id) {
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
    } else {
      toast.error("Ingresa un número entre 1 y 826");
    }
  };
  const onSearchRandom = () => {
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
  const logOut = () => {
    utilStorage.updateAccess("access");
    setAccess(!access);
    toast.info("Adiós. Esperamos verte pronto.");
  };
  const handlerDelete = (id) => {
    dispatch(removeCharacter(id));
  };
  const login = (credentials) => {
    authEndpoints
      .login(credentials.email, credentials.password)
      .then((res) => {
        const { access, message, user } = res.data;
        utilStorage.saveDataStorage("access", access);
        utilStorage.saveDataStorage("user-session", user);
        toast.success(`${message}. Bienvenido.`);
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
  }, [dispatch]);

  const accessStorage = utilStorage.getDataStorage("access");
  useEffect(() => {
    setAccess(accessStorage);
    if (!access) {
      navigate("/");
    } else {
      window.history.back();
    }
  }, [access, accessStorage, navigate]);

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
          access={access}
          element={<Home handlerDelete={handlerDelete} />}
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
