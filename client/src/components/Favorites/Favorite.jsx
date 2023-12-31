import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Empty from "../Empty/Empty";
import styledFavorites from "./Favorites.module.css";
import { useEffect } from "react";
import {
  filterCharacterByGender,
  filterCharacterByStatus,
  orderMyFavorites,
} from "../../redux/actions";
export default function Favorite(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((store) => store.myFavorites);
  const orderFavorites = (event) => {
    const order = event.target.value;
    dispatch(orderMyFavorites(order));
  };

  const filterGender = (event) => {
    const gender = event.target.value;
    dispatch(filterCharacterByGender(gender));
  };

  const filterByStatus = (event) => {
    const status = event.target.value;
    dispatch(filterCharacterByStatus(status));
  };

  useEffect(() => {}, [myFavorites]);
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
              return <Card character={fav} key={fav.id} parent="Favorite" />;
            })}
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
}
