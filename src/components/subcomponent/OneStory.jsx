import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const OneStory = ({name,image,id,viewed}) => {
  return (
    <View className="mx-1.5">
        <LinearGradient
          colors={["#bc2a8d", "#e95950", "#fccc63"]}
          style={{ borderRadius: 100, padding: 3 }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            className="w-[73px] rounded-full cursor-pointer bg-white dark:bg-black p-[3px]"
          >
            <View className="relative items-center justify-center w-full overflow-hidden rounded-full aspect-square">
              <Image
                source={{uri:image}}
                className="w-full h-full transition rounded-full hover:scale-105"
                resizeMode="cover"
                style={{
                  resizeMode: "cover",
                  backgroundColor: "orange",
                  borderRadius: 100,
                  height: "100%",
                  width: "100%",
                  zIndex: 100,
                }}
              />
            </View>
          </TouchableOpacity>
        </LinearGradient>
        <View>
            <Text style={{fontSize:14}} className="items-center justify-center pt-1 text-center text-black dark:text-white">
                {name.length > 10 ? name.slice(0,9)+"..." : name}
            </Text>
        </View>
      </View>
  )
}

export default OneStory