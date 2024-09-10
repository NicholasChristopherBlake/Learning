import { IFilm } from "@/models/IFilm";
import { createSlice } from "@reduxjs/toolkit";

// interface FilmState {
//   films: IFilm[];
//   isLoading: boolean;
//   error: string;
// }

// const initialState: FilmState = {
//   films: [],
//   isLoading: false,
//   error: "",
// };

const initialState = {
  films: [],
  isLoading: false,
  error: "",
};

export const NewFilmsSlice = createSlice({
  name: "newFilms",
  initialState,
  reducers: {
    getNewFilmsIsLoading(state) {
      state.isLoading = true;
    },
    getNewFilmsSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.films = action.payload;
    },
    getNewFilmsError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default NewFilmsSlice.reducer;

export const { getNewFilmsError, getNewFilmsIsLoading, getNewFilmsSuccess } =
  NewFilmsSlice.actions;
