import * as MediaLibrary from "expo-media-library";

export type Theme = {
    dark: boolean;
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    };
};

export type UploadImageType = {
    item: MediaLibrary.Asset;
    index: number
}