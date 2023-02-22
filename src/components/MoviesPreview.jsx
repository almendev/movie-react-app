import Poster from './Poster'

function MoviesPreview ({ movies }) {
  return (
    <div className='flex items-end max-w-7xl md:h-64 overflow-x-scroll overflow-hidden gap-4'>
      {
        movies.map(movie => (
          <Poster key={movie.id} movie={movie} />
        ))
      }
    </div>
  )
}

export default MoviesPreview
