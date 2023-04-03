import axios from "axios";
import { NextPage } from "next";
import React, { useEffect, useState } from "react"

const TestAPI = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState()

  const getNewTitles = async () => {
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
      params: {
        titleType: 'movie',
        sort: 'year.decr',
        info: 'base_info',
        limit: '10',
        year: '2023'
      },
      headers: {
        'X-RapidAPI-Key': '73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    setData(response.data.results)
    console.log(data)
  }

  const getLastPopular = async () => {
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles',
      params: {titleType: 'movie', list: 'top_boxoffice_last_weekend_10', info: 'base_info'},
      headers: {
        'X-RapidAPI-Key': '73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    setData(response.data.results)
    console.log(data)
  }

  const getTitles = async () => {
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles',
      params: {titleType: 'movie', list: 'most_pop_movies', limit: '10', info: 'primaryVideos'},
      headers: {
        'X-RapidAPI-Key': '73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    console.log('response', response.data.results)
    setData(response.data.results)
  }

  const searchTitle = async (search) => {
    setSearch(search)
    const options = {
      method: 'GET',
      url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${search}`,
      params: {exact: 'true'},
      headers: {
        'X-RapidAPI-Key': '73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    setTimeout(() => {
    }, 1000)
    const response = await axios.request(options);
    console.log('response', response.data.results)
    setData(response.data.results)
  }

  const getTitleTypes = async () => {
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/utils/titleTypes',
      headers: {
        'X-RapidAPI-Key': '73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    console.log('Title types:', response.data.results)
  }

  const getLists = async () => {
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/utils/lists',
      headers: {
        'X-RapidAPI-Key': '73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    console.log('Lists:', response.data.results)
  }

  const getGenres = async () => {
    const options = {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/utils/genres',
      headers: {
        'X-RapidAPI-Key': '73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    console.log('Genres:', response.data.results)
  }
  
  useEffect(() => {
    getTitles()
    getTitleTypes()
    getLists()
    getGenres()
  }, [])

  return (
    <>
      <button className="font-bold underline text-gray-800 p-4" onClick={getNewTitles}>Get New Titles</button>
      <button onClick={getLastPopular}>Get Last Popular</button>
      <input onChange={e => searchTitle(e.target.value)} value={search}/> Search Movie
      {console.log('Data:::', data)}
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
      {data ? data.map(film => {
        console.log(film);
        if (film.primaryImage === null) return;
        return (<div key={film.id}>
              <h1 style={{maxWidth: '200px'}}>{film.titleText?.text}</h1>
              <h2>Release Year: {film.releaseDate?.year}</h2>
              <p>Id: {film.id}</p>
              <img style={{width: '200px', height: '300px', objectFit: 'cover'}} src={film.primaryImage?.url} />
          </div>
        )
      }) : null}
      </div>
    </>
  )
};

export default TestAPI;
