import { useContext, useEffect, useState } from 'react'
import MovieContext from '../context/MovieContext'
import { getWatchProviders } from '../utils/api'

function ProvidersGrid ({ title, providers }) {
  return (
    <div>
      <div className='p-2 text-white'>
        <strong className='font-title'>{title}</strong>
      </div>
      <div className='flex justify-center p-2 space-x-2 border-2 border-solid border-gray-700 rounded-xl'>
        {
          providers === undefined || providers.length === 0
            ? <small className='py-2'>Not avaliable</small>
            : (providers.map(provider => (
              <div key={provider.id} className='w-10 rounded-full overflow-hidden'>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${provider.logo}`}
                  alt={provider.name}
                />
              </div>)))
        }
      </div>
    </div>
  )
}

function Providers ({ movieId }) {
  const [providers, setProviders] = useState({
    id: '',
    flatrate: [],
    rent: [],
    buy: []
  })

  const { setError } = useContext(MovieContext)

  useEffect(() => {
    getWatchProviders(movieId)
      .then(providers => {
        setProviders(providers)
      }).catch(error => setError(error))
  }, [])

  return (
    <>
      <div>
        <ProvidersGrid title='Streaming' providers={providers.flatrate} />
        <ProvidersGrid title='Rent' providers={providers.rent} />
        <ProvidersGrid title='Buy' providers={providers.buy} />
      </div>
    </>
  )
}

export default Providers
