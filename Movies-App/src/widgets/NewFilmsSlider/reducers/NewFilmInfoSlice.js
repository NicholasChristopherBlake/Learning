import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: [],
  isLoading: false,
  error: "",
};

export const NewFilmInfoSlice = createSlice({
  name: "newFilmInfo",
  initialState,
  reducers: {
    getNewFilmInfoIsLoading(state) {
      state.isLoading = true;
    },
    getNewFilmInfoSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.info = action.payload;
    },
    getNewFilmInfoError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default NewFilmInfoSlice.reducer;

export const {
  getNewFilmInfoError,
  getNewFilmInfoIsLoading,
  getNewFilmInfoSuccess,
} = NewFilmInfoSlice.actions;
