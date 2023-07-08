import {
  View,
  Text,
  useColorScheme,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Header = () => {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    "Lobster-Regular": require("../../../assets/fonts/Lobster-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return;
  }
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        height: 45,
        flexDirection: "row",
      }}
      className="flex flex-row items-center justify-between px-3 py-1 bg-white h-[45px] dark:bg-black"
    >
      <View>
        <Text
          className="text-3xl text-black dark:text-white"
          style={{ fontFamily: "Lobster-Regular" }}
        >
          Instagram
        </Text>
      </View>
      <View className="flex flex-row items-center justify-center space-x-6">
        <TouchableOpacity activeOpacity={0.6}>
          <Feather
            name="heart"
            size={26}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <AntDesign
            name="message1"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
