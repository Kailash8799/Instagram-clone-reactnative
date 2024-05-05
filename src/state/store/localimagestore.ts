import { create } from 'zustand'
import * as MediaLibrary from 'expo-media-library';

export interface LocalImages {
    allimages: MediaLibrary.Asset[];
    loading: boolean;
    endCursor: string;
    hasNext: boolean;
    setallimages: (images: MediaLibrary.Asset[]) => void;
    setloading: (loading: boolean) => void;
    setendCursor: (cursor: string) => void;
    sethasNext: (hasNext: boolean) => void;
}

export const useLocalImages = create<LocalImages>((set) => ({
    allimages: [],
    loading: false,
    endCursor: "0",
    hasNext: true,
    setallimages: (images) => set((state) => {
        return ({ allimages: [...state.allimages, ...images] });
    }),
    setloading: (loading) => set(() => {
        return ({ loading: loading });
    }),
    setendCursor: (cursor) => set(() => {
        return ({ endCursor: cursor });
    }),
    sethasNext: (hasNext) => set(() => {
        return ({ hasNext: hasNext });
    }),

}))