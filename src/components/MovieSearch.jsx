import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function MovieSearch () {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const pathname = useLocation()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (search.length > 0) {
      navigate('/search/' + search, { state: { pathname } })
      setSearch('')
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='flex justify-center items-center w-full h-20'
      >
        <input
          type='text'
          name='search'
          id='search'
          value={search}
          placeholder='Avengers, Harry Po...'
          onChange={(e) => { setSearch(e.target.value) }}
          className='w-full md:w-full h-10 text-xl md:text-2xl bg-transparent border-b-2 border-solid border-gray-700 focus:outline-none focus-within:bg-transparent'
        />
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default MovieSearch
