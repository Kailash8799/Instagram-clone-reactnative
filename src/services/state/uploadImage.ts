import { create } from 'zustand'

export interface UploadImage {
    image: string | null;
    addUploadImage: (image: string | null) => void;
}

export const useUploadImageStore = create<UploadImage>((set) => ({
    image: null,
    addUploadImage: (image) => set((state) => {
        return ({ image: image });
    })
}))