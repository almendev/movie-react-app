import { useEffect, useState } from 'react'
import { getSimilarMovies } from '../utils/api'
import MoviesPreview from './MoviesPreview'

function SimilarMovies ({ id }) {
  const [similarMovies, setSimilarMovies] = useState([])

  useEffect(() => {
    getSimilarMovies(id)
      .then(data => setSimilarMovies(data.results))
  }, [id])

  return (
    <div>
      {!similarMovies.length > 0
        ? null
        : (
          <div>
            <h4 className='my-4 font-bold text-lg'>Also might like</h4>
            <MoviesPreview movies={similarMovies} />
          </div>)}
    </div>
  )
}

export default SimilarMovies
