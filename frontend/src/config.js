import axios from "axios"
export const axiosInstance = axios.create({
    baseURL : "https://maptravel-d26cb7739e33.herokuapp.com/" 
})