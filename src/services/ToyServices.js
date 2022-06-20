
import api from '../api/Api.jsx'

const newToy = (data) => {

    return api.post('/toys/', data)
}

const allToys = (name) => {
    return api.get('/toys?query=' + name)
}

const deleteToy = (id) => {
    return api.delete('/toys/' + id)
}

const editToy = (id, data) => {
    return api.put('/toys/' + id, data)
}
const getToy = (id) => {
    return api.get('/toys/' + id)
}

const toyService = {
    newToy,
    allToys,
    deleteToy,
    editToy,
    getToy
}

export default toyService