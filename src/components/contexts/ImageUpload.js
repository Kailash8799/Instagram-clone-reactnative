import { createContext, useState } from "react";

export const ImagePickerContext = createContext();

const UploadPostContext = ({ children }) => {
  const [uploadImage, setuploadImage] = useState(null);
  const [imageUploading, setimageUploading] = useState(false);
  const [imageUploadProgress, setimageUploadProgress] = useState(0);

  return (
    <ImagePickerContext.Provider
      value={{
        uploadImage,
        setuploadImage,
        imageUploading,
        setimageUploading,
        imageUploadProgress,
        setimageUploadProgress,
      }}
    >
      {children}
    </ImagePickerContext.Provider>
  );
};

export default UploadPostContext;
