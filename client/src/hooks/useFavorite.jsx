import { useSelector } from "react-redux";

const useFavorite = () => {
  const { myFavorites } = useSelector((state) => state.favorites);

  const orderFavorites = (event) => {
    const order = event.target.value;
  };

  const filterGender = (event) => {
    const gender = event.target.value;
  };

  const filterByStatus = (event) => {
    const status = event.target.value;
  };
  return {
    orderFavorites,
    filterGender,
    filterByStatus,
  };
};

export default useFavorite;
