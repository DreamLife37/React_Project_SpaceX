import axios from "axios";

const API_URL = 'https://api.spacexdata.com/v3/'

export const instance = axios.create({
    baseURL: API_URL
});
