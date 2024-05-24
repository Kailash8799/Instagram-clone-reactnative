import axios from "axios";
import { Toast } from "./toast";
import { tokenCache } from "./token";

export const errorHandler = <T extends any[], R>(
    func: (...args: T) => Promise<R>
): ((...args: T) => Promise<R | undefined>) => {
    return async (...args: T) => {
        try {
            return await func(...args);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response);
                if (error.response?.status == 401) {
                    tokenCache.removeToken("token");
                    tokenCache.removeToken("user");
                }
                Toast.render(error.response?.data.message);
            } else {
                Toast.render((error as Error).message);
            }
            return undefined;
        }
    };
};