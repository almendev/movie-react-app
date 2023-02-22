import { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'
import MoviesPreview from '../components/MoviesPreview'
import MovieGenres from '../components/MovieGenres'
import Loader from '../components/Loader/Loader'
import MovieContext from '../context/MovieContext'
import MovieSearch from '../components/MovieSearch'

function HomePage () {
  const { isLoading, trendingMovies, upcomingMovies, genres } = useContext(MovieContext)
  const { pathname } = useLocation()

  return (
    <>
      {
        isLoading
          ? <div className='flex items-center justify-center w-full h-screen'><Loader /></div>
          : (
            <main>
              <section>
                <div className='flex flex-col md:flex-row w-full items-center justify-between mb-8'>
                  <h1 className='text-3xl text-left font-bold font-title'>MovieApp</h1>
                  <div className='mt-8 md:mt-0'>
                    <MovieSearch />
                  </div>
                </div>
              </section>
              <section className='flex flex-col gap-4 text-left'>
                <div>
                  <strong className='text-2xl'>TRENDS</strong>
                </div>
                <div>
                  <MoviesPreview movies={trendingMovies} />
                </div>
                <div className='flex justify-end w-full'>
                  <Link
                    className='px-4 py-2 rounded-full bg-gray-700 cursor-pointer hover:bg-white hover:text-black'
                    to='/trends'
                    state={{ pathname }}
                  >
                    See More
                  </Link>
                </div>
              </section>
              <section className='flex flex-col gap-4 text-left'>
                <div>
                  <strong className='text-2xl'>UPCOMING</strong>
                </div>
                <div>
                  <MoviesPreview movies={upcomingMovies} />
                </div>
                <div className='flex justify-end w-full'>
                  <button
                    className='px-4 py-2 rounded-full bg-gray-700 cursor-pointer hover:bg-white hover:text-black'
                    to='/upcoming'
                    state={{ pathname }}
                  >
                    See More
                  </button>
                </div>
              </section>
              <section className='flex flex-col gap-4 text-center m-8'>
                <div>
                  <strong className='text-2xl'>GENRES</strong>
                </div>
                <div>
                  <MovieGenres genres={genres} />
                </div>
              </section>
            </main>)
      }

    </>
  )
}

export default HomePage
