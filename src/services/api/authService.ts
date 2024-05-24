import { LoginFormType, RegisterFormType } from "@/src/types/auth";
import { ApiResponse } from "@/src/types/type";
import api from "@/src/utils/api";
import { apiRoutes } from "@/src/utils/apiRoutes";
import { errorHandler } from "@/src/utils/errorHandler";

export class AuthService {
    static login = errorHandler(async (body: LoginFormType) => {
        const { data } = await api.post(apiRoutes.auth.signin, body);
        return data as ApiResponse;
    });
    static register = errorHandler(async (body: RegisterFormType) => {
        const { data } = await api.post(apiRoutes.auth.signup, body);
        return data as ApiResponse;
    });
    static resetpassword = errorHandler(async (body: { email: string }) => {
        const { data } = await api.post(apiRoutes.auth.resetpassword, body);
        return data as ApiResponse;
    });
    static verifyOTP = errorHandler(async (body: RegisterFormType) => {
        const { data } = await api.post(apiRoutes.auth.verifyOTP, body);
        return data as ApiResponse;
    });
}