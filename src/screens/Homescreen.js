import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../components/Home';
import Explore from '../components/Explore';

const Tab = createBottomTabNavigator();

const Homescreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  );
}

export default Homescreen