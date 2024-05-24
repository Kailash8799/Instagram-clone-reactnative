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
    project: {
        create: "projects",
        getByUserId: (id: string) => `projects/user/${id}`,
        addMember: (id: string) => `projects/${id}/addMember`,
        removeMember: (id: string) => `projects/${id}/removeMember`,
        makeManager: (id: string) => `projects/${id}/makeManager`,
        removeManager: (id: string) => `projects/${id}/removeManager`,
        getById: (id: string) => `projects/${id}`,
        update: (id: string) => `projects/${id}`,
        delete: (id: string) => `projects/${id}`,
    },
    task: {
        create: "tasks",
        getByUserId: (id: string) => `tasks/user/${id}`,
        getByProjectId: (id: string) => `tasks/project/${id}`,
        getByUserIdAndProjectId: (userId: string, projectId: string) =>
            `tasks/user/${userId}/project/${projectId}`,
        getById: (id: string) => `tasks/${id}`,
        update: (id: string) => `tasks/${id}`,
        delete: (id: string) => `tasks/${id}`,
    },
    invite: {
        getByUserId: (id: string) => `invites/GetByUserId/${id}`,
        getByProjectId: (id: string) => `invites/GetByProjectId/${id}`,
        accept: (id: string) => `invites/${id}/accept`,
        reject: (id: string) => `invites/${id}/reject`,
    },
};