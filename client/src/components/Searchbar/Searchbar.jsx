import { useState } from "react";
import styledSearch from "./Searchbar.module.css";

export default function Searchbar(props) {
  const { onSearch, onSearchRandom, logOut } = props;
  const [id, setID] = useState("");

  const handlerChange = ({ target }) => {
    const { value } = target;
    setID(value);
  };

  const closeSession = () => {
    confirm("¿Realmente deseas cerrar sesión?") ? logOut() : null;
  };
  return (
    <div className={styledSearch.searchBar}>
      <input
        type="text"
        className={styledSearch.inputSearch}
        onChange={handlerChange}
        value={id}
      />
      <button
        className={`${styledSearch.btn} ${styledSearch.btnAgregar}`}
        onClick={() => {
          onSearch(id);
          setID("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
      <button
        className={`${styledSearch.btn} ${styledSearch.btnRandom}`}
        onClick={onSearchRandom}
      >
        <i className="fa-solid fa-shuffle"></i>
      </button>
      <button
        className={`${styledSearch.btn} ${styledSearch.btnSalir}`}
        onClick={closeSession}
      >
        <i className="fa-solid fa-power-off"></i>
      </button>
    </div>
  );
}
