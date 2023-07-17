import { View, Text, TextInput, useColorScheme, Dimensions } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

let width = Dimensions.get("screen").width;

const SearchBox = () => {
  const colorScheme = useColorScheme();
  return (
    <View className="bg-gray-200 dark:bg-zinc-700 px-2 h-8 mx-3 my-3 rounded-md flex space-x-2 flex-row items-center">
      <Ionicons
        name="search"
        size={20}
        color={colorScheme === "dark" ? "white" : "black"}
      />
      <TextInput
        placeholderTextColor={colorScheme === "dark" ? "white" : "black"}

        placeholder="Search"
        style={{width:width-70}}
        className="text-black dark:text-white"
      />
    </View>
  );
};

export default SearchBox;
