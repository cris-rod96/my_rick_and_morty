import { useState } from "react";
import styledSearch from "./Searchbar.module.css";
import useLogin from "../../hooks/useLogin";
import PropTypes from "prop-types";

export default function Searchbar({ onSearch, onSearchRandom, toast }) {
  const { logOut } = useLogin();
  const [id, setID] = useState("");

  const handlerChange = ({ target }) => {
    const { value } = target;
    setID(value);
  };

  const closeSession = () => {
    confirm("¿Realmente deseas cerrar sesión?") ? logOut(toast) : null;
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

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onSearchRandom: PropTypes.func.isRequired,
  toast: PropTypes.func.isRequired,
};
