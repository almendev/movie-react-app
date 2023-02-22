import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import TrendingMoviesPage from './pages/TrendingMoviesPage'
import UpcomingMoviesPage from './pages/UpcomingMoviesPage'
import MoviesByGenresPage from './pages/MoviesByGenresPage'
import MovieSearchPage from './pages/MovieSearchPage'
import ErrorPage from './pages/ErrorPage'
import useMovies from './hooks/useMovies'
import MovieContext from './context/MovieContext'
import RootLayout from './pages/RootLayout'
import './App.css'

function App () {
  const {
    states,
    updaters
  } = useMovies()

  const {
    error,
    isLoading,
    trendingMovies,
    upcomingMovies,
    genres,
    currentMovie
  } = states

  const {
    setIsLoading,
    getMovieDetails,
    setError
  } = updaters

  const context = {
    isLoading,
    error,
    trendingMovies,
    upcomingMovies,
    genres,
    currentMovie,
    setIsLoading,
    getMovieDetails,
    setError
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path='/trends' element={<TrendingMoviesPage />} />
      <Route path='/upcoming' element={<UpcomingMoviesPage />} />
      <Route path='/movie/:id' element={<MoviePage />} />
      <Route path='/search/:query' element={<MovieSearchPage />} />
      <Route path='/genres/:id/:genre' element={<MoviesByGenresPage />} />
    </Route>
  ))

  return (
    <MovieContext.Provider value={context}>
      <RouterProvider router={router} />
    </MovieContext.Provider>
  )
}

export default App
