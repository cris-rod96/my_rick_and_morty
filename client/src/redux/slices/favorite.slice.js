import { createSlice } from "@reduxjs/toolkit";
import { utilStorage } from "../../utils";
import { FILTERS, FILTERS_TYPE } from "../../config/vars";

const initialState = {
  myFavorites: [],
  filteredFavorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    saveFavorites: (state, action) => {
      for (let payload of action.payload) {
        const { Character } = payload;
        const foundCharacter = state.myFavorites.find(
          (character) => character.id === Character.id
        );

        if (!foundCharacter) {
          state.myFavorites = [...state.myFavorites, Character];
          state.filteredFavorites = state.myFavorites;
        }
      }
      utilStorage.saveDataStorage("favorites_added", state.myFavorites);
    },
    addFavorite: (state, action) => {
      const character = action.payload;
      state.myFavorites = [...state.myFavorites, character];
      utilStorage.saveDataStorage("favorites_added", [
        ...state.myFavorites,
        character,
      ]);
      state.filteredFavorites = state.myFavorites;
    },
    removeFavorites: (state, action) => {
      const id = action.payload;
      const newFavorites = state.myFavorites.filter(
        (favorite) => favorite.id !== id
      );
      state.myFavorites = [...newFavorites];
      state.filteredFavorites = state.myFavorites;
      utilStorage.saveDataStorage("favorites_added", state.myFavorites);
    },

    filterFavorites: (state, action) => {
      const { type, order } = action.payload;
      switch (type) {
        case FILTERS.ORDER_BY_NAME:
          if (order === FILTERS_TYPE.ASCENDENTE) {
            const filtered = state.myFavorites.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            });
            state.filteredFavorites = [...filtered];
          }

          if (order === FILTERS_TYPE.DESCENDENTE) {
            const filtered = state.myFavorites.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            });
            state.filteredFavorites = [...filtered];
          }
          break;

        case FILTERS.ORDER_BY_GENDER:
          if (order !== FILTERS_TYPE.ALL) {
            const filtered = state.myFavorites.filter(
              (fav) => fav.gender === order
            );
            state.filteredFavorites = filtered;
            break;
          }
          state.filteredFavorites = state.myFavorites;
          break;

        case FILTERS.ORDER_BY_STATUS:
          if (order !== FILTERS_TYPE.ALL) {
            const filtered = state.myFavorites.filter(
              (fav) => fav.status === order
            );
            state.filteredFavorites = filtered;
            break;
          }
          state.filteredFavorites = state.myFavorites;
          break;
      }
    },

    resetFilters: (state) => {
      state.filteredFavorites = state.myFavorites;
    },
  },
});

export const {
  addFavorite,
  removeFavorites,
  saveFavorites,
  filterFavorites,
  resetFilters,
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
