import axios from "axios";

const axiousPublic = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export default axiousPublic;
