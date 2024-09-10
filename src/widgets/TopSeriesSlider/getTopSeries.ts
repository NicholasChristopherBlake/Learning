import axios from "axios";

export const getTopSeries = async () => {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles",
    params: {
      list: "top_rated_series_250",
      limit: "20",
      info: "base_info",
    },
    headers: {
      "X-RapidAPI-Key": "73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  // console.log("Response Series is", response.data.results);
  const responseFiltered = response.data.results.filter(
    (item: any) => item.primaryImage !== null
  );
  // console.log("Response Series Filtered is", responseFiltered);

  return responseFiltered;
};
