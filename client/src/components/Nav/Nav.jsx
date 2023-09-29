import { NavLink } from "react-router-dom";
import Navlinks from "../NavLinks/Navlinks";
import Searchbar from "../Searchbar/Searchbar";
import styledNav from "./Nav.module.css";
export default function Nav(props) {
  const { onSearch, onSearchRandom, logOut } = props;
  return (
    <div className={styledNav.nav}>
      <div className={styledNav.navContent}>
        <Navlinks />
        <Searchbar
          onSearch={onSearch}
          onSearchRandom={onSearchRandom}
          logOut={logOut}
        />
      </div>
    </div>
  );
}
