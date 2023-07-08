import { View, Text, ScrollView, Animated } from "react-native";
import React from "react";
import Header from "./subcomponent/Header";
import Story from "./subcomponent/Story";
import Post from "./subcomponent/Post";

const Home = () => {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY,0,45)
  const translateY = diffClamp.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
  });
  return (
    <>
      <View className="bg-white dark:bg-black">
        <Animated.View style={{transform:[{translateY:translateY}],elevation:1,zIndex:100}}>
          <Header translateY={translateY}/>
        </Animated.View>
        <ScrollView
          pinchGestureEnabled={false}
          showsVerticalScrollIndicator={false}
          onScroll={(e) => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
        >
        <View style={{height:45,width:"100%"}} className="w-full bg-white dark:bg-black"></View>
          <Story />
          <View className="w-screen bg-slate-200 dark:bg-slate-800 h-[0.3px]"></View>
          <Post />
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
