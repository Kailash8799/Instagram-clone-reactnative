import { View, Text } from "react-native";
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
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import Ionic from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Homescreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Foundation name="home" size={26} color="black" />
            ) : (
              <Octicons name="home" size={22} color="black" />
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
              <FontAwesome name="search" size={22} color={"black"} />
            ) : (
              <Feather name="search" size={24} color="black" />
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
              <Entypo name="squared-plus" size={26} color={"black"} />
            ) : (
              <FontAwesome name="plus-square-o" size={26} color={"black"} />
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
              <Ionic name="caret-forward-circle" color={"black"} size={28} />
            ) : (
              <Ionic
                name="caret-forward-circle-outline"
                color={"black"}
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
              <FontAwesome name="user-circle" size={24} color="black" />
            ) : (
              <FontAwesome name="user-circle-o" size={24} color="black" />
            );
          },
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Homescreen;
