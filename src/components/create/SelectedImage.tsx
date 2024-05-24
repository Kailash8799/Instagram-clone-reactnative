import React from "react";
import { blurhash } from "@/src/constants/constant";
import { UploadImageType } from "@/src/utils/theme/types";
import { memo, useCallback } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { Text } from "../Themed";
import { Image } from "expo-image";
import { useUploadImageStore } from "@/src/services/state/uploadImage";

const { width } = Dimensions.get("screen");
const IMAGE_WIDTH = width / 3.3;

const ImageComp = memo(({ item, index }: UploadImageType) => {
  const { addUploadImage } = useUploadImageStore();
  const handlePress = useCallback(() => {
    addUploadImage(item?.uri ?? "");
  }, []);

  return (
    <TouchableOpacity onPress={handlePress} style={{ position: "relative" }}>
      <Image
        source={{ uri: (item?.uri ?? "") as string }}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
        style={{
          height: IMAGE_WIDTH,
          width: IMAGE_WIDTH,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          width: 20,
          height: 20,
          backgroundColor: "red",
          borderRadius: 20,
        }}
      >
        <Text>{index + 1}</Text>
      </View>
    </TouchableOpacity>
  );
});

export default ImageComp;
