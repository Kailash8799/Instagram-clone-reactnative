export const apiRoutes = {
    auth: {
        signin: "api/v1/auth/signin",
        signup: "api/v1/auth/signup",
        resetpassword: "api/v1/auth/resetpassword",
        verifyOTP: "api/v1/auth/verifyotp",
    },
    user: {
        getByuserId: (id: string) => `api/v1/user/${id}`,
        update: (id: string) => `api/v1/user/update/${id}`,
    },
};
