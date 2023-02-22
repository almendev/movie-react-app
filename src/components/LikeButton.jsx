import { useState } from 'react'

function LikeButton () {
  const [favorite, setFavorite] = useState(false)
  return (
    <div
      className='absolute top-2 right-2 flex justify-center items-center px-2 py-2 text-md rounded-full bg-slate-800 cursor-pointer hover:bg-slate-600'
      onClick={() => setFavorite(!favorite)}
    >
      {
        favorite
          ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5} stroke='currentColor'
              className='w-6 h-6 text-red-600 fill-red-600'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>)
          : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5} stroke='currentColor'
              className='w-6 h-6 fill-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
              />
            </svg>)
      }
    </div>
  )
}

export default LikeButton
