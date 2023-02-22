import { createContext } from 'react'

const MovieContext = createContext({
  isLoading: false,
  error: null,
  trendingMovies: [],
  upcomingMovies: [],
  genres: [],
  currentMovie: {
    id: null,
    title: '',
    poster_path: '',
    release_date: '',
    runtime: 0,
    original_language: '',
    genres: [],
    overview: ''
  },
  getMovieDetails: null,
  setError: null

})

export default MovieContext
