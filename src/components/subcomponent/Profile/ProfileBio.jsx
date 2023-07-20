import { View, Text } from "react-native";
import React from "react";

const ProfileBio = () => {
  return (
    <View className="mx-1 w-[170px] my-1 px-4">
      <Text className="text-black dark:text-white font-semibold text-sm">{"Kailash Rajput"}</Text>
      <Text className="text-black dark:text-white font-semibold text-sm">{"DDU '25'"}</Text>
      <Text className="text-black dark:text-white font-semibold text-sm">{"Computer Enginerring"}</Text>
    </View>
  );
};

export default ProfileBio;
