import { View, Text } from "react-native";
import React from "react";
import Header from "./subcomponent/Header";
import Story from "./subcomponent/Story";

const Home = () => {
  
  return (
    <>
      <View>
        <Header />
        <Story />
      </View>
    </>
  );
};

export default Home;
