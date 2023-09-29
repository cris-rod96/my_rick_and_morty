import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  FILTER_GENDER,
  FILTER_STATUS,
  ORDER_FAVORITES,
} from "./action-type.js";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};
export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: payload,
        // allCharacters: [
        //   ...state.allCharacters.filter((favorite) => favorite.id !== payload),
        // ],
      };

    case FILTER_GENDER:
      const aux = [...state.allCharacters];
      if (payload === "All") {
        return {
          ...state,
          myFavorites: [...aux],
        };
      }
      return {
        ...state,
        myFavorites: aux.filter((fav) => fav.gender === payload),
      };

    case FILTER_STATUS:
      const auxStatus = [...state.allCharacters];
      if (payload === "All") {
        return {
          ...state,
          myFavorites: [...auxStatus],
        };
      }
      return {
        ...state,
        myFavorites: auxStatus.filter((fav) => fav.status === payload),
      };

    case ORDER_FAVORITES:
      const auxAll = [...state.allCharacters];
      if (payload === "A") {
        return {
          ...state,
          myFavorites: auxAll.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          }),
        };
      }

      if (payload === "D") {
        return {
          ...state,
          myFavorites: auxAll.sort((a, b) => {
            if (b.name < a.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          }),
        };
      }

    default:
      return { ...state };
  }
}
