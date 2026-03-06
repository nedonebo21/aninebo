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
    const token = process.env.NEXT_PUBLIC_API_TOKEN

    if (token) {
      config.headers['X-Application'] = token
    }

    return config
  },
  error => Promise.reject(error)
)
