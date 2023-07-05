import axios from "axios";

const axios = Axios.create({
    baseURL: process.env.BACKEND_URL,
    Headers:{
        'X-Requested-with' : 'XMLHttpRequest'
    },

    withCredentials: true
})


export default axios;