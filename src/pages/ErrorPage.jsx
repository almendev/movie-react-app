import { useRouteError } from 'react-router-dom'

function ErrorPage () {
  const error = useRouteError()
  return (
    <div>
      <div className='mb-8'>
        <h1 className='text-3xl text-center font-bold'>MovieApp</h1>
      </div>
      <strong>Oops somenthing bad happened...</strong>
      <small className='block'>{error.statusText || error.message}</small>
    </div>
  )
}

export default ErrorPage
