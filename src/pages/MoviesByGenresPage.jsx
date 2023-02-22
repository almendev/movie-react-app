import { useParams } from 'react-router-dom'
import ArrowButton from '../components/ArrowButton'
import MoviesGrid from '../components/MoviesGrid'
import { getPaginatedMoviesByGenre } from '../utils/api'

function MoviesByGenresPage () {
  const { id, genre } = useParams()

  return (
    <>
      <ArrowButton />
      <h1 className='text-xl md:text-3xl text-left font-bold my-4'>{genre.split().map(letter => { return letter[0].toUpperCase() + letter.substring(1) })}</h1>
      <MoviesGrid getter={getPaginatedMoviesByGenre} customParam={id} />
    </>
  )
}

export default MoviesByGenresPage
