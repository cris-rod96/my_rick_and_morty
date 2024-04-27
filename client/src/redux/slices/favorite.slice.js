import { createSlice } from "@reduxjs/toolkit";
import { utilStorage } from "../../utils";

const initialState = {
  myFavorites: [],
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
    },
    removeFavorites: (state, action) => {
      const id = action.payload;
      const newFavorites = state.myFavorites.filter(
        (favorite) => favorite.id !== id
      );
      state.myFavorites = [...newFavorites];
      utilStorage.saveDataStorage("favorites_added", state.myFavorites);
    },
  },
});

export const { addFavorite, removeFavorites, saveFavorites } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
