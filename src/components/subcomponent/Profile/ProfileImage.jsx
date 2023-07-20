import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const ProfileImage = () => {
  return (
    <View className="px-4">
      <View className="flex flex-row items-center justify-between mt-5 space-x-3">
        <LinearGradient
          colors={["#bc2a8d", "#e95950", "#fccc63"]}
          style={{ borderRadius: 100, padding: 2 }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            className="w-[80px] rounded-full cursor-pointer bg-white dark:bg-black p-[2px]"
          >
            <View className="relative items-center justify-center w-full overflow-hidden rounded-full aspect-square">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
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
        </LinearGradient>
        <TouchableOpacity>
          <View className="items-center justify-center">
            <Text className="text-black dark:text-white font-bold text-base">
              {"1202"}
            </Text>
            <Text className="text-black dark:text-white font-bold text-base">
              Posts
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="justify-center items-center">
            <Text className="text-black dark:text-white font-bold text-base">
              {"120k"}
            </Text>
            <Text className="text-black dark:text-white font-bold text-base">
              Followers
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="justify-center items-center">
            <Text className="text-black dark:text-white font-bold text-base">
              {"120"}
            </Text>
            <Text className="text-black dark:text-white font-bold text-base">
              Following
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileImage;
