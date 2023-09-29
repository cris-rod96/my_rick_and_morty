import { NavLink } from "react-router-dom";
import styledNavlinks from "./Navlinks.module.css";
export default function Navlinks(props) {
  return (
    <div className={styledNavlinks.navLinks}>
      <NavLink to="/home">
        <i className="fa-solid fa-house"></i>
        Home
      </NavLink>
      <NavLink to={"/about"}>
        <i className="fa-regular fa-address-card"></i>
        About
      </NavLink>
      <NavLink to={"/favorites"}>
        <i className="fa-solid fa-star"></i>
        Favorites
      </NavLink>
    </div>
  );
}
