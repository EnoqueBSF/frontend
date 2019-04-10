import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend4.herokuapp.com'
})

export default api;