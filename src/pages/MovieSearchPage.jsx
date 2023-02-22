import { useParams } from 'react-router-dom'
import ArrowButton from '../components/ArrowButton'
import MovieSearch from '../components/MovieSearch'
import MoviesGrid from '../components/MoviesGrid'
import { getSearchedMovies } from '../utils/api'

function MovieSearchPage () {
  const { query } = useParams()

  return (
    <div>
      <ArrowButton />
      <MovieSearch />
      <MoviesGrid key={query} getter={getSearchedMovies} customParam={query} />
    </div>
  )
}

export default MovieSearchPage
