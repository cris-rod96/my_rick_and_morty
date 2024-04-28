import { useDispatch } from "react-redux";
import { filterFavorites, resetFilters } from "../redux/slices/favorite.slice";

const useFavorite = () => {
  const dispatch = useDispatch();

  const orderFavorites = (event) => {
    const order = event.target.value;
    dispatch(
      filterFavorites({
        type: "order_by_name",
        order,
      })
    );
  };

  const filterGender = (event) => {
    const order = event.target.value;
    dispatch(
      filterFavorites({
        type: "order_by_gender",
        order,
      })
    );
  };

  const filterByStatus = (event) => {
    const order = event.target.value;
    dispatch(
      filterFavorites({
        type: "order_by_status",
        order,
      })
    );
  };

  const clearFilters = () => {
    dispatch(resetFilters());
  };

  return {
    orderFavorites,
    filterGender,
    filterByStatus,
    clearFilters,
  };
};

export default useFavorite;
