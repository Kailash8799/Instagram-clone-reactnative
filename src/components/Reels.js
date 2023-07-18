import {
  View,
  Text,
  ScrollView,
  useColorScheme,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import { StyleSheet, Button } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";
import OneReels from "./subcomponent/OneReels";
import { SwiperFlatList } from 'react-native-swiper-flatlist';

let width = Dimensions.get("screen").width;
let height = Dimensions.get("screen").height;

const Reels = () => {
  const colorScheme = useColorScheme();
  const totalreels = [
    {
      id: "asdfghfdcxvb",
      username: "kailash8799",
      userimage:
        "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-19/344759869_645444740930076_6013201269205349713_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=27H5STwBwBAAX_dvLYE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA9SoRxhKIN7S-YoxF1v1tA7ZID978NEK0gnFht2Iae3A&oe=64B9BC42&_nc_sid=8b3546",
      postlink:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      caption: "Hey buddy how are you and fine jo bhi hoga vo bhi dekha jayega",
      time: "",
      isvideo: false,
      hashtags: ["posts", "love"],
    },
    {
      id: "asdfghfcvvdcxvb",
      username: "dasharath07",
      userimage:
        "https://plus.unsplash.com/premium_photo-1661448623542-eb6ec42ec5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      postlink:
        "https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["buddy", "janu"],
    },
    {
      id: "asdfghfcvvdccvxvb",
      username: "nilesh9106",
      userimage: "https://avatars.githubusercontent.com/u/97864081?v=4",
      postlink:
        "https://plus.unsplash.com/premium_photo-1661320875783-bee87f406d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["baby", "india"],
    },
    {
      id: "asdfdcvvvfghfcvvdccvxvb",
      username: "dilip231",
      userimage:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      postlink:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["lover", "friends"],
    },
    {
      id: "asdfdfcvsfbhbfghfcvvdccvxvb",
      username: "dilip231",
      userimage:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      postlink:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["lover", "friends"],
    },
    {
      id: "asdfdffsdrstgfhdfghfcvvdccvxvb",
      username: "dilip231",
      userimage:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      postlink:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["lover", "friends"],
    },
    {
      id: "ascvbdfddsdfhfghfcvvdccvxvb",
      username: "dilip231",
      userimage:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      postlink:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["lover", "friends"],
    },
    {
      id: "axcvbnsdfwszhjkdfghfcvvdccvxvb",
      username: "dilip231",
      userimage:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      postlink:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["lover", "friends"],
    },
    {
      id: "asdfdfgbsswtrhfcbvbvvdccvxvb",
      username: "dilip231",
      userimage:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      postlink:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["lover", "friends"],
    },
    {
      id: "asdcxvfdfghfcxvbcvvdccvxvb",
      username: "dilip231",
      userimage:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      postlink:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["lover", "friends"],
    },
    {
      id: "asdfdfghfcvvdccxcxcxqwvxvbxcvb",
      username: "dilip231",
      userimage:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      postlink:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["lover", "friends"],
    },
    {
      id: "asdfdvbnnmggdfghfbpicvvdccvxvb",
      username: "dilip231",
      userimage:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      postlink:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["lover", "friends"],
    },
    {
      id: "ascbvcvbdfdfghfcvvdccvxvb",
      username: "dilip231",
      userimage:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      postlink:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["lover", "friends"],
    },
    {
      id: "asdfdfghcxfcffccvvvdccvxvb",
      username: "dilip231",
      userimage:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      postlink:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["lover", "friends"],
    },
    {
      id: "avbv54vghsdfdfghfcvvdccvxvb",
      username: "dilip231",
      userimage:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      postlink:
        "https://media.licdn.com/dms/image/D4D03AQHsFost9OYZNQ/profile-displayphoto-shrink_800_800/0/1686843781093?e=1694044800&v=beta&t=LpPVVu8oyUdsnVeSz8lUAcfZArXQTfevgZQIYeUOabY",
      caption: "Oh no yes ",
      time: "",
      isvideo: false,
      hashtags: ["lover", "friends"],
    },
  ];
  // const totalreels = [
  //   {
  //     id: "asdfghfdcxvb",
  //     username: "kailash8799",
  //     userimage:
  //       "https://instagram.famd15-2.fna.fbcdn.net/v/t51.2885-19/344759869_645444740930076_6013201269205349713_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.famd15-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=27H5STwBwBAAX_dvLYE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA9SoRxhKIN7S-YoxF1v1tA7ZID978NEK0gnFht2Iae3A&oe=64B9BC42&_nc_sid=8b3546",
  //     postlink:
  //       "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  //     caption: "Hey buddy how are you and fine jo bhi hoga vo bhi dekha jayega",
  //     time: "",
  //     isvideo: false,
  //     hashtags: ["posts", "love"],
  //   },
  // ];
  return (
    <View
      style={{
        position: "relative",
        height: height - 68,
        width: width,
        backgroundColor: colorScheme === "dark" ? "black" : "#ffffff",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 15,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          right: 15,
          zIndex: 500,
        }}
      >
        <Text className="text-xl font-bold text-black dark:text-white">
          Reels
        </Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Feather
            name="camera"
            size={24}
            color={colorScheme === "dark" ? "#ffffff" : "black"}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={totalreels}
        pagingEnabled={true}
        renderItem={({ item, ind }) => {
          return (
            <OneReels
              key={ind}
              id={item?.id}
              username={item?.username}
              userimage={item?.userimage}
              postlink={item?.postlink}
              caption={item?.caption}
              time={item?.time}
              hashtags={item?.hashtags}
              song={"Baris barsa pani chham dfdv dfvdfv fvdf vds vdv dvd d d d  chham"}
              mensition={["nepal","kailash"]}
              totallikes={200}
              totalcomment={343}
            />
          );
        }}
        keyExtractor={(item) => item.id}
        snapToAlignment="center"
        decelerationRate={"fast"}

        // snapToInterval={Dimensions.get("window").height-71}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{height:20}}></View>
    </View>
  );
};

export default Reels;
