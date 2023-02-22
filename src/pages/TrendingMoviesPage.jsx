import ArrowButton from '../components/ArrowButton'
import MoviesGrid from '../components/MoviesGrid'
import { getTrendingMoviesByPage } from '../utils/api'

function TrendingMoviesPage () {
  return (
    <>
      <div className='flex w-full'>
        <ArrowButton />
      </div>
      <h1 className='text-3xl text-left font-bold my-4'>Trends</h1>
      <MoviesGrid getter={getTrendingMoviesByPage} />
    </>
  )
}

export default TrendingMoviesPage
