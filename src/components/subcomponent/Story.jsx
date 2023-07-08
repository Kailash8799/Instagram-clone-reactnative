import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import OneStory from "./OneStory";

const Story = () => {
  const allStory = [
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
      className="py-2 bg-white dark:bg-black"
    >
      <View className="mx-1.5">
        <LinearGradient
          colors={["#bc2a8d", "#e95950", "#fccc63"]}
          style={{ borderRadius: 100, padding: 3 }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            className="w-[73px] bg-white dark:bg-black p-[3px] rounded-full cursor-pointer"
          >
            <View className="relative items-center justify-center w-full overflow-hidden rounded-full aspect-square">
              <Image
                source={{
                  uri: "https://instagram.famd1-3.fna.fbcdn.net/v/t51.2885-19/344759869_645444740930076_6013201269205349713_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.famd1-3.fna.fbcdn.net&_nc_cat=100&_nc_ohc=qrV138LofiAAX92A62W&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAM-vDJ8JjaphmHCHnBzXACf8-bWiYzJF2Up8O85_kmYA&oe=64A5F5C2&_nc_sid=8b3546",
                }}
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
        <View>
          <Text
            style={{ fontSize: 14 }}
            className="items-center justify-center pt-1 text-center text-black dark:text-white"
          >
            Your story
          </Text>
        </View>
      </View>
      {allStory.map((item, ind) => {
        return (
          <OneStory
            name={item?.name}
            image={item?.image}
            id={item?.id}
            viewed={item?.viewed}
            key={ind}
          />
        );
      })}
      <View className="w-3"></View>
    </ScrollView>
  );
};

export default Story;
