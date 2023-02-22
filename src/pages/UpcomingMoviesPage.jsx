import ArrowButton from '../components/ArrowButton'
import MoviesGrid from '../components/MoviesGrid'
import { getUpcomingMoviesByPage } from '../utils/api'

function UpcomingMoviesPage () {
  return (
    <>
      <div className='flex w-full'>
        <ArrowButton />
      </div>
      <h1 className='text-3xl text-left font-bold my-4'>Upcoming</h1>
      <MoviesGrid getter={getUpcomingMoviesByPage} />
    </>
  )
}

export default UpcomingMoviesPage
