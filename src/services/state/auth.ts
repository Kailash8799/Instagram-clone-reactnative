import { create } from "zustand";

export interface Auth {
    isLoading: boolean;
    isLoaded: boolean;
    isSignedIn: boolean;
    refreshAuth: boolean;
    setIsLoading: (value: boolean) => void;
    setRefresh: (value: boolean) => void;
    setIsSignIn: (value: boolean) => void;
    setIsLoaded: (value: boolean) => void;
}

export const useAuth = create<Auth>((set) => ({
    isLoading: false,
    isSignedIn: false,
    isLoaded: true,
    refreshAuth: false,
    setIsLoading: (value) =>
        set((state) => {
            return { isLoading: value };
        }),
    setRefresh: (value) =>
        set((state) => {
            return { refreshAuth: value };
        }),
    setIsLoaded: (value) =>
        set((state) => {
            return { isLoaded: value };
        }),
    setIsSignIn: (value) =>
        set((state) => {
            return { isSignedIn: value };
        }),
}));
