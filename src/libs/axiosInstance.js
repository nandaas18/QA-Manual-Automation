import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://reqres.in/api/users",
});

export default axiosInstance;
