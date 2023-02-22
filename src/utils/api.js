const baseUrl = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

export const getTrendingMovies = async () => {
  const res = await fetch(`${baseUrl}/trending/movie/day?api_key=${apiKey}`)
  const data = await res.json()
  return data.results
}

export const getAllGenres = async () => {
  const res = await fetch(`${baseUrl}/genre/movie/list?api_key=${apiKey}`)
  const data = await res.json()
  return data.genres
}

export const getTrendingMoviesByPage = async (page) => {
  const res = await fetch(`${baseUrl}/trending/movie/day?page=${page}&api_key=${apiKey}`)
  const data = await res.json()
  return data
}

export const getPaginatedMoviesByGenre = async (page, genre) => {
  const res = await fetch(`${baseUrl}/discover/movie?page=${page}&with_genres=${genre}&api_key=${apiKey}`)
  const data = await res.json()
  return data
}

export const getMovieById = async (id) => {
  const res = await fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
  const data = await res.json()
  return data
}

export const getWatchProviders = async (id) => {
  const res = await fetch(`${baseUrl}/movie/${id}/watch/providers?api_key=${apiKey}`)
  const data = await res.json()

  const flatrate = data.results?.PT?.flatrate?.map(provider => ({ id: provider.provider_id, logo: provider.logo_path, name: provider.provider_name }))
  const rent = data.results?.PT?.rent?.map(provider => ({ id: provider.provider_id, logo: provider.logo_path, name: provider.provider_name }))
  const buy = data.results?.PT?.buy?.map(provider => ({ id: provider.provider_id, logo: provider.logo_path, name: provider.provider_name }))

  return {
    flatrate,
    rent,
    buy
  }
}

export const getSimilarMovies = async (id) => {
  const res = await fetch(`${baseUrl}//movie/${id}/recommendations?api_key=${apiKey}`)
  const data = await res.json()
  return data
}

export const getSearchedMovies = async (page, query) => {
  const res = await fetch(`${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}`)
  const data = await res.json()
  return data
}

export const getUpcomingMovies = async () => {
  const res = await fetch(`${baseUrl}/movie/upcoming?api_key=${apiKey}`)
  const data = await res.json()
  return data
}

export const getUpcomingMoviesByPage = async (page) => {
  const res = await fetch(`${baseUrl}/movie/upcoming?page=${page}&api_key=${apiKey}`)
  const data = await res.json()
  return data
}
