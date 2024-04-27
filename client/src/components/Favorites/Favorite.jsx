import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Empty from "../Empty/Empty";
import styledFavorites from "./Favorites.module.css";
import { useEffect } from "react";
import { utilStorage } from "../../utils";
import { favoriteEndpoints } from "../../api/favorite.api";
import { saveFavorites } from "../../redux/slices/favorite.slice";
import { toast } from "sonner";

export default function Favorite(props) {
  const { myFavorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const orderFavorites = (event) => {
    const order = event.target.value;
  };

  const filterGender = (event) => {
    const gender = event.target.value;
  };

  const filterByStatus = (event) => {
    const status = event.target.value;
  };

  useEffect(() => {
    if (!myFavorites || myFavorites.length === 0) {
      const { id } = utilStorage.getDataStorage("user-session");
      favoriteEndpoints
        .getAllFavorites(id)
        .then((res) => {
          dispatch(saveFavorites(res.data));
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    }
  }, [dispatch, myFavorites]);
  return (
    <>
      {myFavorites.length > 0 ? (
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
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
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
          </div>

          <div className={styledFavorites.containerCards}>
            {myFavorites.map((fav) => {
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
