import { IFilm } from "@/models/IFilm";
import { createSlice } from "@reduxjs/toolkit";

interface FilmState {
  films: IFilm[];
  isLoading: boolean;
  error: string;
}

const initialState: FilmState = {
  films: [],
  isLoading: false,
  error: "",
};

export const newFilmsSlice = createSlice({
  name: "newFilms",
  initialState,
  reducers: {},
});

export default newFilmsSlice.reducer;
