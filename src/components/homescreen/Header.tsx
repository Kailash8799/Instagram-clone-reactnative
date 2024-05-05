import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React from "react";
import { useThemeConstant } from "@/src/hooks/useThemeConstant";
import { AntDesign, Feather } from "@expo/vector-icons";

const HomeScreenHeader = () => {
  const { commonTheme } = useThemeConstant();
  const colorScheme = useColorScheme();
  const color = colorScheme === "dark" ? "black" : "white";
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View>
        <Text style={[styles.font, { color: commonTheme.color }]}>
          Instagram
        </Text>
      </View>
      <View style={[styles.icon]}>
        <TouchableOpacity style={[styles.margin]} activeOpacity={0.6}>
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

export default HomeScreenHeader;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    zIndex: 100,
  },
  icon: { display: "flex", flexDirection: "row", alignItems: "center" },
  font: {
    fontSize: 25,
  },
  margin: { marginRight: 15 },
});
