import { createSlice } from "@reduxjs/toolkit";
import { utilStorage } from "../../utils";

const initialState = {
  myCharacters: [],
  filteredCharacters: [],
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    saveCharacters: (state, action) => {
      state.myCharacters = action.payload;
      state.filteredCharacters = action.payload;
    },
    addCharacter: (state, action) => {
      const { payload } = action;
      state.myCharacters = [...state.myCharacters, payload];
      utilStorage.saveDataStorage("characters_added", state.myCharacters);
    },

    removeCharacter: (state, action) => {
      const id = action.payload;
      const newCharacters = state.myCharacters.filter(
        (character) => character.id !== id
      );
      state.myCharacters = [...newCharacters];

      utilStorage.saveDataStorage("characters_added", newCharacters);
    },
  },
});

export const { addCharacter, removeCharacter, saveCharacters } =
  characterSlice.actions;
export default characterSlice.reducer;
