import { useColorScheme } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Explore from "../components/Explore";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Create from "../components/Create";
import Reels from "../components/Reels";
import Profile from "../components/Profile";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import Ionic from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Homescreen = () => {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "black" : "white",
          borderTopColor:colorScheme === "dark" ? "gray" : "#cbd5e1"
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Foundation
                name="home"
                size={26}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            ) : (
              <Octicons
                name="home"
                size={22}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            );
          },
        }}
        component={Home}
      />
      <Tab.Screen
        name="Explore"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <FontAwesome
                name="search"
                size={22}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            ) : (
              <Feather
                name="search"
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            );
          },
        }}
        component={Explore}
      />
      <Tab.Screen
        name="Create"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Entypo
                name="squared-plus"
                size={26}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            ) : (
              <FontAwesome
                name="plus-square-o"
                size={26}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            );
          },
        }}
        component={Create}
      />
      <Tab.Screen
        name="Reels"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Ionic
                name="caret-forward-circle"
                color={colorScheme === "dark" ? "white" : "black"}
                size={28}
              />
            ) : (
              <Ionic
                name="caret-forward-circle-outline"
                color={colorScheme === "dark" ? "white" : "black"}
                size={28}
              />
            );
          },
        }}
        component={Reels}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
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
            );
          },
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Homescreen;
