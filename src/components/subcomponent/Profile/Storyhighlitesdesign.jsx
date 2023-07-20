import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useColorScheme } from "react-native";

const Storyhighlitesdesign = ({index,image,sname}) => {
  const colorScheme = useColorScheme();
  return (
    <View className="mx-1.5 items-center">
      <View
        style={{
          borderRadius: 100,
          padding: 2,
          backgroundColor: colorScheme === "dark" ? "#fff" : "#6b7281",
          width:74
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-[70px] rounded-full cursor-pointer bg-white dark:bg-black p-[2px]"
        >
          <View className="relative items-center justify-center w-full overflow-hidden rounded-full aspect-square">
            <Image
              source={{
                uri: image,
              }}
              className="w-full h-full transition rounded-full hover:scale-105"
              resizeMode="cover"
              style={{
                resizeMode: "cover",
                backgroundColor: "orange",
                borderRadius: 100,
                height: "100%",
                width: "100%",
                zIndex: 100,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-black dark:text-white">
            {`${index}.${sname.slice(0,10)}`}
        </Text>
      </View>
    </View>
  );
};

export default Storyhighlitesdesign;
