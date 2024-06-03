import axios from "axios";
import { ENV_VAR } from "../constants/env";
import { tokenCache } from "./token";

const api = axios.create({
    baseURL: ENV_VAR.BACKEND_URL,
    headers: {
        Accept: "application/json",
        "content-type": "application/json",
    },
});

api.interceptors.request.use(
    async (config) => {
        try {
            const token = await tokenCache.getToken("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default api;
