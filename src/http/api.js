import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:9091/api/v1"
})

export default api