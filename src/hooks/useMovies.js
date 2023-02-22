import { useState, useEffect } from 'react'
import { getTrendingMovies, getUpcomingMovies, getAllGenres, getMovieById } from '../utils/api'

function useMovies () {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [trendingMovies, setTrendingMovies] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [currentMovie, setCurrentMovie] = useState({
    id: null,
    title: '',
    poster_path: '',
    release_date: '',
    runtime: 0,
    original_language: '',
    genres: [],
    overview: ''
  })

  useEffect(() => {
    setIsLoading(true)
    getTrendingMovies()
      .then(movies => {
        setTrendingMovies(movies)
        setIsLoading(false)
      }).catch(error => setError(error))
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getUpcomingMovies()
      .then(data => {
        setUpcomingMovies(data.results)
        setIsLoading(false)
      }).catch(error => setError(error))
  }, [])

  useEffect(() => {
    getAllGenres()
      .then(genres => {
        setGenres(genres)
      }).catch(error => setError(error))
  }, [])

  const getMovieDetails = async (id) => {
    setIsLoading(true)
    getMovieById(id)
      .then(data => {
        setCurrentMovie({
          id: data.id,
          title: data.title,
          poster_path: data.poster_path,
          release_date: data.release_date,
          runtime: data.runtime,
          original_language: data.original_language,
          genres: [...data.genres],
          overview: data.overview
        })
        setIsLoading(false)
      }).catch(error => setError(error))
  }

  const states = {
    isLoading,
    error,
    trendingMovies,
    upcomingMovies,
    genres,
    currentMovie
  }

  const updaters = {
    setIsLoading,
    setError,
    setTrendingMovies,
    setGenres,
    getMovieDetails
  }

  return { states, updaters }
}

export default useMovies
