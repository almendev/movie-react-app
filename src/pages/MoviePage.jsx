import { useContext, useEffect } from 'react'
import { ScrollRestoration, useLocation, useParams } from 'react-router-dom'
import ArrowButton from '../components/ArrowButton'
import Providers from '../components/Providers'
import SimilarMovies from '../components/SimilarMovies'
import MovieContext from '../context/MovieContext'

function MoviePage () {
  const {
    isLoading,
    currentMovie,
    getMovieDetails
  } = useContext(MovieContext)

  const { id } = useParams()
  const { state: carriedMovie } = useLocation()

  useEffect(() => {
    getMovieDetails(id)
  }, [id])

  const movie = carriedMovie?.movie || currentMovie

  return (
    <div>
      <ScrollRestoration />
      <ArrowButton />
      <section>
        <h1 className='text-xl md:text-3xl text-center font-bold m-8'>
          {movie.title}
        </h1>
      </section>
      <section>
        <div className='flex flex-col md:flex-row justify-center gap-8'>
          {isLoading
            ? <div className='w-40 md:w-80 md:h-[480px] rounded-2xl bg-black mx-auto md:mx-0' />
            : (
              <div className='w-40 md:w-80 md:h-[480px] rounded-2xl overflow-hidden object-cover bg-black mx-auto md:mx-0'>
                <img
                  src={movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : 'https://images.pexels.com/photos/6192328/pexels-photo-6192328.jpeg?auto=compress&cs=tinysrgb&w=800'}
                  alt={movie.title}
                  className='md:h-[480px]'
                />
              </div>)}
          <div className='grid grid-cols-1 h-fit text-left max-w-md'>
            <strong className=' font-title '>Release Date</strong>
            <small>{movie.release_date}</small>
            <strong className=' font-title '>Original Language</strong>
            <small>{movie.original_language.toUpperCase()}</small>
            <strong className=' font-title '>Runtime:</strong>
            <small>{currentMovie.runtime} min</small>
            <strong className=' font-title '>Genres</strong>
            <div className=' space-x-2'>
              {currentMovie.genres.map(genre => (
                <small key={genre.id}>{genre.name}</small>
              ))}
            </div>
            <strong className=' font-title '>Overview</strong>
            <p>{movie.overview}</p>
            <div className='mt-4'>
              <Providers movieId={id} />
            </div>
            <small>Source: JustWatch Portugal </small>
          </div>
        </div>
      </section>
      <section className='w-full text-left'>
        <SimilarMovies id={id} />
      </section>
    </div>
  )
}

export default MoviePage
