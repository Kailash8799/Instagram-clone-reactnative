import axios from "axios";
import { Toast } from "./toast";
import { tokenCache } from "./token";

export const errorHandler = <T extends any[], R>(
    func: (...args: T) => Promise<R>
) => {
    return async (...args: T) => {
        try {
            return await func(...args);
        } catch (error) {
            console.log(error);
            if (axios.isAxiosError(error)) {
                if (error.response?.status == 401) {
                    tokenCache.removeToken("token");
                    tokenCache.removeToken("user");
                }
                Toast.render("Network error occurred!");
            } else {
                Toast.render((error as Error).message);
            }
        }
    };
};
