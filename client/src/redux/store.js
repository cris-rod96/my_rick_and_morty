import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favorite.slice";
import characterReducer from "./slices/character.slice";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    characters: characterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
