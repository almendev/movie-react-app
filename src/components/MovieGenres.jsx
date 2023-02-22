import { useLocation, useNavigate } from 'react-router-dom'

function MovieGenres ({ genres }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className='grid grid-cols-2 md:flex md:flex-wrap justify-center'>
      {
        genres.map(genre => (
          <button
            key={genre.id}
            className='px-2 text-xs py-1 md:px-4 md:py-2 m-1 bg-black rounded-full hover:text-black hover:bg-white'
            onClick={() => navigate(`/genres/${genre.id}/${genre.name.toLowerCase()}`, { state: pathname })}
          >
            {genre.name}
          </button>))
      }
    </div>
  )
}

export default MovieGenres
