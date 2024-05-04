import React from "react";
import { Octicons, Ionicons, Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Colors from "@/src/constants/Colors";
import { useColorScheme } from "@/src/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          paddingTop: 5,
          backgroundColor: colorScheme === "dark" ? "black" : "white",
          borderTopWidth: 0.2,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Octicons
                name="home"
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            ) : (
              <Octicons
                name="home"
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome
                name="search"
                size={23}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            ) : (
              <Feather
                name="search"
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="create/page"
        options={{
          title: "",
          tabBarIcon: ({ }) => (
            <FontAwesome
              name="plus-square-o"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("create/index");
          },
        })}
      />
      <Tabs.Screen
        name="reel/index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Ionicons
                name="caret-forward-circle"
                color={colorScheme === "dark" ? "white" : "black"}
                size={28}
              />
            ) : (
              <Ionicons
                name="caret-forward-circle-outline"
                color={colorScheme === "dark" ? "white" : "black"}
                size={28}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <FontAwesome
                name="user-circle"
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            ) : (
              <FontAwesome
                name="user-circle-o"
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            ),
        }}
      />
    </Tabs>
  );
}
