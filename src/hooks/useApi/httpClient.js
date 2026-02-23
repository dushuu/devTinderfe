import axios from 'axios'
import Cookie from 'js-cookie'


const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '',
  withCredentials: true,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
})

/* =======================
   REQUEST INTERCEPTOR
======================= */
httpClient.interceptors.request.use(
  (config) => {
    const publicRoutes = [ '/login', '/register', '/logout']

    if (publicRoutes.some((v) => config.url?.includes(v))) {
      return config
    }

    const token = Cookie.get('Authorization')
    if (token) {
      config.headers.Authorization = token
    }

    return config
  },
  (error) => Promise.reject(error)
)

/* =======================
   RESPONSE INTERCEPTOR
======================= */
httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error?.response?.status
    const detail = error?.response?.data?.detail

    if (
      status === 401 ||
      (status === 403 && detail === 'Invalid token.')
    ) {
      // Remove token
      Cookie.remove('Authorization')

      const index = window.location.hostname.indexOf('.')
      const domain =
        index !== -1 ? window.location.hostname.slice(index) : undefined

      Cookie.remove('Authorization', {
        domain,
        path: '/',
      })

      delete httpClient.defaults.headers.Authorization

      // Optional redirect
      // window.location.href = `${import.meta.env.VITE_REDIRECT_BASE_URL}?next=${window.location.pathname}`
    }

    return Promise.reject(error)
  }
)

export default httpClient