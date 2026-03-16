import axios from 'axios'

const isServer = typeof window === 'undefined'

export const axiosInstance = axios.create({
  baseURL: isServer ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_CLIENT_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  config => {
    if (process.env.NEXT_PUBLIC_API_TOKEN) {
      config.headers['X-Application'] = process.env.NEXT_PUBLIC_API_TOKEN
    }

    if (!isServer) {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }

    return config
  },
  error => Promise.reject(error)
)
