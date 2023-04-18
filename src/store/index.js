import { configureStore } from "@reduxjs/toolkit";
import NewFilmsSlice from "@/widgets/NewFilmsSlider/reducers/NewFilmsSlice.js";
import NewFilmInfoSlice from "@/widgets/NewFilmsSlider/reducers/NewFilmInfoSlice.js";

export const store = configureStore({
  reducer: {
    newFilms: NewFilmsSlice,
    newFilmInfo: NewFilmInfoSlice,
  },
});

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;
