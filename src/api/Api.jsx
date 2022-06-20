import axios from 'axios'



const apis = {
    development: 'https://toy4api.herokuapp.com/'
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