import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useColorScheme } from "react-native";
import Storyhighlitesdesign from "./Storyhighlitesdesign";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Storyhighlites = () => {
  const colorScheme = useColorScheme();
  const allHighlitedStory = [
    {
      id: "12345rd",
      name: "kailash",
      image:
        "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      viewed: false,
    },
    {
      id: "123c45rd",
      name: "kailash8799",
      image:
        "https://plus.unsplash.com/premium_photo-1661448623542-eb6ec42ec5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      viewed: false,
    },
    {
      id: "1253ss45rd",
      name: "kailash8799",
      image:
        "https://plus.unsplash.com/premium_photo-1666901328554-29162d8b58ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      viewed: false,
    },
    {
      id: "1234s55rd",
      name: "kailash8799",
      image:
        "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      viewed: false,
    },
    {
      id: "1234x5rd5",
      name: "kailash8799",
      image:
        "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      viewed: false,
    },
    {
      id: "12w3455rd",
      name: "kailash8799",
      image:
        "https://images.unsplash.com/photo-1513477967668-2aaf11838bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      viewed: false,
    },
    {
      id: "12345r7wd",
      name: "kailash87993122",
      image:
        "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      viewed: false,
    },
    {
      id: "123458wrd",
      name: "kailash8799",
      image:
        "https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      viewed: false,
    },
    {
      id: "123d845rd",
      name: "kailash8799",
      image:
        "https://plus.unsplash.com/premium_photo-1661700093968-b538c5a9f539?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      viewed: false,
    },
  ];
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      automaticallyAdjustsScrollIndicatorInsets={true}
      className="mt-4"
    >
      <View className="w-3" />
      {allHighlitedStory.map((item, ind) => {
        return (
          <Storyhighlitesdesign
            key={ind}
            index={ind + 1}
            image={item?.image}
            sname={item?.name}
          />
        );
      })}
      <View className="mx-1.5">
      <TouchableOpacity activeOpacity={0.7}> 
        <View className="w-[74px] h-[74px] border items-center justify-center border-gray-600 rounded-full">
          <AntDesign
            name="plus"
            size={40}
            color={colorScheme === "dark" ? "#ffffff" : "black"}
          />
        </View>
        <View>
            <Text className="text-black text-center dark:text-white">New</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View className="w-3" />
    </ScrollView>
  );
};

export default Storyhighlites;
