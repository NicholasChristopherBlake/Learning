import axios from "axios";

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
    (item: any) => item.primaryImage !== null
  );
  // console.log("Response Filtered is", responseFiltered);

  return responseFiltered;
};
