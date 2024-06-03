export type LoginFormType = {
    UserName: string;
    Password: string;
};
export type RegisterFormType = {
    UserName: string;
    FirstName: string;
    LastName: string;
    Password: string;
    Email: string;
};

export type User = {
    _id: string;
    username: string;
    name: string;
    email: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
};

export type UpdateUserFormType = {
    name?: string;
    email?: string;
    avatar?: string;
};
