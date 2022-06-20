import axios from 'axios'



const apis = {
    development: 'http://localhost:1234/api/'
}

const api = axios.create({
    baseURL: apis.development
})

api.interceptors.request.use((config) => {
    const store = localStorage.getItem('logado')
    const login = JSON.parse(store || '""')
    if (login.token) {
        config.headers = {
            Authorization: `Bearer ${login.token}`
        }

    }

    return config
})




export default api