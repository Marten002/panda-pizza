import axios from 'axios'

const reactAppServer = process.env.REACT_APP_SERVER
const baseURL = (reactAppServer ? reactAppServer : 'http://localhost:8000/')

const client = axios.create({
    baseURL,
    withCredentials: true,
})

export default client