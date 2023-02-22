import { useLocation, useNavigate } from 'react-router-dom'

function ArrowButton () {
  const { state } = useLocation()

  const navigate = useNavigate()

  const prevRoute = state?.pathname

  const handleClick = () => {
    if (prevRoute) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <div className='flex w-full'>
      <button
        onClick={handleClick}
        className='px-4 py-2 rounded-full bg-gray-700 cursor-pointer hover:bg-white hover:text-black'
      >
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
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </button>
    </div>
  )
}

export default ArrowButton
