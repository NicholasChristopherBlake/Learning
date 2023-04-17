// import { IFilm } from "@/models/IFilm";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// export const newFilmsAPI = createApi({
//   reducerPath: "newFilmsAPI",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://moviesdatabase.p.rapidapi.com/",
//   }),
//   endpoints: (build) => {
//     getNewFilms: build.query({
//       query: () => ({
//         url: "/titles",
//         params: {
//           titleType: "movie",
//           list: "top_boxoffice_last_weekend_10",
//           info: "base_info",
//         },
//         headers: {
//           "X-RapidAPI-Key":
//             "73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f",
//           "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
//         },
//       }),
//     });
//   },
// });
