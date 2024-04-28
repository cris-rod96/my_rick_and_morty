import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Empty from "../Empty/Empty";
import styledFavorites from "./Favorites.module.css";
import { useEffect } from "react";
import useFavorite from "../../hooks/useFavorite";
import PropTypes from "prop-types";
import { useState } from "react";
import { utilStorage } from "../../utils";
import { favoriteEndpoints } from "../../api/favorite.api";
import { saveFavorites } from "../../redux/slices/favorite.slice";
import { useOutletContext } from "react-router-dom";
import { AxiosError } from "axios";

export default function Favorite() {
  const { toast } = useOutletContext();
  const { filteredFavorites, myFavorites } = useSelector(
    (state) => state.favorites
  );
  const { filterByStatus, filterGender, orderFavorites, clearFilters } =
    useFavorite();
  const dispatch = useDispatch();

  useEffect(() => {
    const userSession = utilStorage.getDataStorage("user-session");
    if (userSession && userSession.id) {
      favoriteEndpoints
        .getAllFavorites(userSession.id)
        .then((res) => {
          dispatch(saveFavorites(res.data));
        })
        .catch((err) => {
          if (err instanceof AxiosError) {
            toast.error(err.response.data.message);
          } else {
            toast.error("Error desconocido.");
          }
        });
    }
  }, [filteredFavorites]);
  return (
    <>
      {filteredFavorites && filteredFavorites.length > 0 ? (
        <div className={styledFavorites.containerFavorites}>
          <div className={styledFavorites.containerFilters}>
            <div className={styledFavorites.containerSelect}>
              <label htmlFor="" className={styledFavorites.labelSelects}>
                Order
              </label>
              <select
                name="order"
                className={styledFavorites.selectFilter}
                onChange={orderFavorites}
              >
                <option value="ASC">Ascendente</option>
                <option value="DESC">Descendente</option>
              </select>
            </div>

            <div className={styledFavorites.containerSelect}>
              <label htmlFor="" className={styledFavorites.labelSelects}>
                Gender
              </label>
              <select
                name="gender"
                className={styledFavorites.selectFilter}
                onChange={filterGender}
              >
                <option value="All">All</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>

            <div className={styledFavorites.containerSelect}>
              <label htmlFor="" className={styledFavorites.labelSelects}>
                Status
              </label>
              <select
                name="status"
                id="status"
                className={styledFavorites.selectFilter}
                onChange={filterByStatus}
              >
                <option value="All">All</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>

            <div className={styledFavorites.containerSelect}>
              <button
                type="button"
                className={styledFavorites.btnClearFilter}
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          </div>

          <div className={styledFavorites.containerCards}>
            {filteredFavorites.map((fav) => {
              return (
                <Card
                  character={fav}
                  key={fav.id}
                  parent="Favorite"
                  isFav={true}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
}
Favorite.propTypes = {
  markFavorite: PropTypes.func.isRequired,
};
