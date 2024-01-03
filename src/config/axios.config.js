import axios from "axios";

const axiosPublic = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

export default axiosPublic;