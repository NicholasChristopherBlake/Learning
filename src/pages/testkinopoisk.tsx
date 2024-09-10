import axios from "axios";
import { NextPage } from "next";
import React, { useEffect, useState } from "react"

const TestKinopoisk: NextPage = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState()

  const getTitles = async () => {
    const options = {
      method: 'GET',
      url: 'https://api.kinopoisk.dev/v1/movie/random',
      headers: {
        'X-API-KEY': '81X1GTK-P4RMY30-GR0VX98-C8VM409',
        'accept': 'application/json'
      }
    };
    const response = await axios.request(options);
    console.log('response', response.data)
    setData(response.data)
  }
  
  useEffect(() => {
    getTitles()
  }, [])

  return (
    <div>
      
    </div>
  )
};

export default TestKinopoisk;
