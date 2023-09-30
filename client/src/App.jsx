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
// const GET_CHARACTER_BY_ID = "https://rickandmortyapi.com/api/character";
const GET_CHARACTER_BY_ID = "http://localhost:3005/rickandmorty/character";

import About from "./components/About/About";
function App() {
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const characterDoesntExist = (id) => {
    return characters.find((character) => character.id === id) === undefined;
  };

  const onSearch = async (id) => {
    if (id) {
      id = Number(id);
      if (id < 1 || id > 826)
        return alert("Debes ingresar un número entre 1 y 826");
      if (characterDoesntExist(id)) {
        try {
          const { data } = await axios(`${GET_CHARACTER_BY_ID}/${id}`);
          if (data) {
            const newCharacter = {
              id,
              name: data.name,
              status: data.status,
              gender: data.gender,
              origin: data.origin,
              image: data.image,
            };
            setCharacters([newCharacter, ...characters]);
          }
        } catch (err) {
          alert(err);
        }
      } else {
        alert("Este personaje ya ha sido agregado");
      }
    } else {
      alert("Debes ingresar un número entre 1 y 826");
    }
  };

  const onSearchRandom = () => {
    const idRandom = Math.floor(Math.random() * (826 - 1 + 1) + 1);
    if (!characterDoesntExist(idRandom)) onSearchRandom();
    onSearch(idRandom);
  };

  const handlerDelete = (id) => {
    setCharacters([
      ...characters.filter((character) => character.id !== Number(id)),
    ]);
  };

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const {
        data: { access },
      } = await axios(
        `${"http://localhost:3005/rickandmorty/login"}?email=${email}&password=${password}`
      );
      if (access) {
        setAccess(access);
        access && navigate("/home");
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const logOut = () => {
    setAccess(false);
  };

  useEffect(() => {
    if (!access) {
      navigate("/");
    }
  }, [access]);

  return (
    <div>
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
          element={
            <Home
              characters={characters}
              handlerDelete={handlerDelete}
              loading={loading}
            />
          }
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
