import InfiniteScroll from 'react-infinite-scroll-component'
import { useState, useEffect, useContext } from 'react'
import Poster from '../components/Poster'
import MovieContext from '../context/MovieContext'

function MoviesGrid ({ getter, customParam }) {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const { setError } = useContext(MovieContext)

  useEffect(() => {
    getter(page, customParam)
      .then(data => {
        const ids = movies.map(movie => movie.id)
        const newMovies = data.results.filter(movie => !ids.includes(movie.id))
        setMovies((prevMovies) => prevMovies.concat(newMovies))
        setHasMore(data.page < data.total_pages)
      }).catch(error => setError(error))
  }, [page, customParam])

  const height = `${window.innerHeight - 172}px`

  return (
    <div
      id='movieContainer'
      style={{ maxHeight: height }}
      className='flex justify-center w-full overflow-auto'
    >
      <InfiniteScroll
        dataLength={movies.length}
        hasMore={hasMore}
        next={() => setPage(prevPage => prevPage + 1)}
        loader={<h4 className='w-full'>Loading...</h4>}
        scrollableTarget='movieContainer'
        className='flex flex-wrap gap-4 justify-center'
      >
        {movies.map(movie => (
          <div key={movie.id} className='flex flex-col items-center'>
            <Poster movie={movie} />
            <small className='text-xs md:text-inherit pt-2 max-w-[80px] md:max-w-[160px]'>{movie.title}</small>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default MoviesGrid
