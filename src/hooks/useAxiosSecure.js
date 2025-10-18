// src/hooks/useAxiosSecure.js
import { useEffect } from "react";
import { useNavigate } from "react-router";
import axiousPublic from "./axiousPublic";

const useAxiosSecure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 👉 Add request interceptor for token
    const requestInterceptor = axiousPublic.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // 👉 Add response interceptor for 401/403
    const responseInterceptor = axiousPublic.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          localStorage.removeItem("access-token"); // clear invalid token
          navigate("/login"); // redirect to login
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiousPublic.interceptors.request.eject(requestInterceptor);
      axiousPublic.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate]);

  return axiousPublic;
};

export default useAxiosSecure;
