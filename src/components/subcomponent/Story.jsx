import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Story = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      automaticallyAdjustsScrollIndicatorInsets={true}
      className="p-2 bg-white dark:bg-black"
    >
      <LinearGradient
        colors={["#bc2a8d", "#e95950", "#fccc63"]}
        style={{ borderRadius: 100, padding: 3 }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-[73px] rounded-full cursor-pointer"
        >
          <View className="relative items-center justify-center w-full overflow-hidden rounded-full aspect-square">
            <Image
              source={require("../../../assets/icon.png")}
              className="w-full h-full transition rounded-full hover:scale-105"
              resizeMode="cover"
              style={{
                resizeMode: "cover",
                backgroundColor: "orange",
                borderRadius: 100,
                height: "100%",
                width: "100%",
                zIndex:100
              }}
            />
          </View>
          <View className="absolute bottom-0 right-0 ">
            <AntDesign
              name="pluscircle"
              size={20}
              color="#405de6"
              style={{
                fontSize: 20,
                color: "#405de6",
                backgroundColor: "white",
                borderRadius: 100,
              }}
            />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

export default Story;
