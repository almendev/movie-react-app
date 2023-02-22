import { useLocation, Link } from 'react-router-dom'

function Poster ({ movie }) {
  const { pathname } = useLocation()

  return (
    <Link
      className='w-20 md:w-40 md:h-60 bg-black shrink-0 rounded-2xl overflow-hidden object-cover hover:animate-pulse cursor-pointer'
      to={`/movie/${movie.id}`} state={{ movie, pathname }}
    >
      <img
        id={movie.id}
        src={
          movie.poster_path !== null
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : 'https://images.pexels.com/photos/6192328/pexels-photo-6192328.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
        alt={movie.title}
        loading='lazy'
        className='md:min-h-[240px]'
      />
    </Link>
  )
}

export default Poster
