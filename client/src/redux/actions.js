import axios from "axios";

import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ORDER_FAVORITES,
  FILTER_GENDER,
  FILTER_STATUS,
} from "./action-type";

export const addFavorite = (character) => {
  try {
    const endpoint = "http://localhost:3005/rickandmorty/fav";
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character);
      if (data) {
        return dispatch({
          type: ADD_FAVORITE,
          payload: data,
        });
      }
    };
  } catch (err) {
    alert(err.message);
  }
};

export const removeFavorite = (id) => {
  try {
    const endpoint = `http://localhost:3005/rickandmorty/fav/${id}`;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);
      if (data) {
        return dispatch({
          type: REMOVE_FAVORITE,
          payload: data,
        });
      }
    };
  } catch (err) {
    alert(err.message);
  }
};

// export const removeFavorite = (id) => {
//   return {
//     type: REMOVE_FAVORITE,
//     payload: id,
//   };
// };

export const orderMyFavorites = (order) => {
  return {
    type: ORDER_FAVORITES,
    payload: order,
  };
};

export const filterCharacterByGender = (gender) => {
  return {
    type: FILTER_GENDER,
    payload: gender,
  };
};

export const filterCharacterByStatus = (status) => {
  return {
    type: FILTER_STATUS,
    payload: status,
  };
};
