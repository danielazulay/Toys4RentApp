
import api from '../api/Api'

const getUsers = () => {

    return api.get('/users')

}

const createUser = (data) => {

    return api.post('/users/signup', data)
}

const updateUser = (id, data) => {
    return api.put('/users/' + id, data)
}

const login = (data) => {
    return api.post('/users/login', data)
}

const logout = (data) => {
    return api.post('/users/logout', data)
}

const getUSerById = (id) => {
    return api.get('/users/' + id)
}


const userServices = {
    getUsers,
    createUser,
    updateUser,
    login,
    logout,
    getUSerById

}

export default userServices