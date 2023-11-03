import axios from "axios";

export const BASE_URL = 'http://localhost:5000/';

const $axios = axios.create({
    baseURL: BASE_URL
})

export default $axios;