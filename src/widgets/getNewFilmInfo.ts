import axios from "axios";

export const getNewFilmInfo = async (id: string) => {
  const optionsAka = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com/titles/${id}/aka`,
    headers: {
      "X-RapidAPI-Key": "73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const optionsRatings = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
    params: { info: "meta" },
    headers: {
      "X-RapidAPI-Key": "73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const optionsCrew = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
    params: { info: "directors" },
    headers: {
      "X-RapidAPI-Key": "73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const optionsBasic = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
    params: { info: "base_info" },
    headers: {
      "X-RapidAPI-Key": "73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const optionsActors = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
    params: { info: "principalCast" },
    headers: {
      "X-RapidAPI-Key": "73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const responseBasic = await axios.request(optionsBasic);
  const responseAka = await axios.request(optionsAka);
  const responseRatings = await axios.request(optionsRatings);
  const responseCrew = await axios.request(optionsCrew);
  const responseActors = await axios.request(optionsActors);
  console.log("Response is", {
    responseBasic,
    responseAka,
    responseRatings,
    responseCrew,
    responseActors,
  });

  return [
    responseBasic.data.results,
    responseActors.data.results,
    responseCrew.data.results,
    responseRatings.data.resutls,
    responseAka.data.results,
  ];
};
