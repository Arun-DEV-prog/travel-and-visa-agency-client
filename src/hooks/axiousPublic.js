import axios from "axios";

const axiousPublic = axios.create({
  baseURL: "https://agency-server-five.vercel.app",
  //withCredentials: true,
});

export default axiousPublic;
