import useNav from "../../hooks/useNav";
import Navlinks from "../NavLinks/Navlinks";
import Searchbar from "../Searchbar/Searchbar";
import styledNav from "./Nav.module.css";

import PropTypes from "prop-types";

export default function Nav({ toast }) {
  const { onSearch, onSearchRandom, logOut } = useNav();

  const handleSearch = (id) => {
    onSearch(id, toast);
  };

  const handleSearchRandom = () => {
    onSearchRandom(toast);
  };

  return (
    <div className={styledNav.nav}>
      <div className={styledNav.navContent}>
        <Navlinks />
        <Searchbar
          onSearch={handleSearch}
          onSearchRandom={handleSearchRandom}
          logOut={logOut}
          toast={toast}
        />
      </div>
    </div>
  );
}

Nav.propTypes = {
  toast: PropTypes.func.isRequired,
};
