import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const ProfileHeader = () => {
  const colorScheme = useColorScheme();
  return (
    <View className="px-4 bg-white dark:bg-black">
      <View className="flex flex-row justify-between items-center">
        <TouchableOpacity className="flex flex-row space-x-1 items-center">
          <Text className="text-black text-xl font-bold dark:text-white">
            thekailash8799
          </Text>
          <AntDesign
            name="down"
            size={16}
            color={colorScheme === "dark" ? "#ffffff" : "black"}
          />
        </TouchableOpacity>
        <View className="flex flex-row space-x-5 items-center">
          <TouchableOpacity>
            <FontAwesome5
              name="plus-square"
              size={26}
              color={colorScheme === "dark" ? "#ffffff" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              name="menu"
              size={30}
              color={colorScheme === "dark" ? "#ffffff" : "black"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
