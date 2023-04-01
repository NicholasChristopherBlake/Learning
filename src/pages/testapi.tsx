import axios from "axios";
import { NextPage } from "next";
import React, { useEffect, useState } from "react"

const TestAPI: NextPage = () => {
  const [data, setData]: any = useState([])

  const getTitles = async () => {
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles',
      headers: {
        'X-RapidAPI-Key': '73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    const results = await axios.request(options);
    console.log(results.data.results)
    setData(results.data.results)
    console.log('data', data)
  }
  
  useEffect(() => {
    getTitles()
  }, [])

  return (
    <div>
      {data && data.map(film => (
        <div key={film.id}>
          <p>{film.id}</p>
          <img src={film.primaryImage.url} />
        </div>
      ))}
    </div>
  )
};

export default TestAPI;
