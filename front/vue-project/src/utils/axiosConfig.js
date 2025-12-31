import axios from 'axios';
import router from '@/router';

//Création d’une instance Axios appeler api
const api = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    headers : {
        Accept : 'application/json',
        'Content-Type' : 'application/json',
    },
  withCredentials: true
})

//Interceptor Request : ajouter le token si présent

api.interceptors.request.use(
    //On récupère le token d’authentification stocké dans le navigateur.
    (config) => {
        const token = sessionStorage.getItem('token')
        if (token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
    },
    (error) => Promise.reject(error)
)

// Interceptor RESPONSE : gérer 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('user')

      router.push({ name: 'login' })
    }

    return Promise.reject(error)
  }
)

export default api