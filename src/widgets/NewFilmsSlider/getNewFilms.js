import axios from "axios";
import {
  getNewFilmsError,
  getNewFilmsIsLoading,
  getNewFilmsSuccess,
} from "./reducers/NewFilmsSlice";

export const getNewFilms = async () => {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    params: {
      titleType: "movie",
      list: "top_boxoffice_last_weekend_10",
      info: "base_info",
    },
    headers: {
      "X-RapidAPI-Key": "73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  // console.log("Response is", response);
  const responseFiltered = response.data.results.filter(
    (item) => item.primaryImage !== null
  );
  // console.log("Response Filtered is", responseFiltered);

  return responseFiltered;
};

export const getNewFilmsRedux = () => {
  return async (dispatch) => {
    try {
      dispatch(getNewFilmsIsLoading());
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles",
        params: {
          titleType: "movie",
          list: "top_boxoffice_last_weekend_10",
          info: "base_info",
        },
        headers: {
          "X-RapidAPI-Key":
            "73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      const responseFiltered = response.data.results.filter(
        (item) => item.primaryImage !== null
      );
      dispatch(getNewFilmsSuccess(responseFiltered));
    } catch (e) {
      dispatch(getNewFilmsError(e.message));
    }
  };
};
