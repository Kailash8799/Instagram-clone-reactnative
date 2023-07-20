import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  useColorScheme,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Video, ResizeMode } from "expo-av";

import { StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

let width = Dimensions.get("screen").width;
let height = Dimensions.get("screen").height;

const OneReels = ({
  userimage,
  username,
  caption,
  hashtags,
  song,
  mensition,
  totallikes,
  totalcomment,
  navigation
}) => {
  
  const colorScheme = useColorScheme();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [isMuted, setIsMuted] = React.useState(false);
  const [hasLiked, sethasLiked] = useState(false);
  const [hasbookmark, sethasbookmark] = useState(false);
  useEffect(() => {
    return () => {
      video.current.pauseAsync();
    }
  }, [navigation])
  
  return (
    <View style={{ position: "relative", height: height - 87, width: width }}>
      <TouchableOpacity
        onPress={() => {
          setIsMuted(!isMuted);
        }}
        activeOpacity={0.9}
        onPressOut={() => {
          status.isPlaying ? null : video.current.playAsync();
        }}
        onLongPress={() => {
          status.isPlaying
            ? video.current.pauseAsync()
            : video.current.playAsync();
        }}
        style={[styles.container, { width: width, height: height,backgroundColor:colorScheme==='dark'?"black":"#fff" }]}
      >
        <Video
          ref={video}
          style={styles.video}
          source={require("../../../assets/v2.mp4")}
          useNativeControls={false}
          isMuted={isMuted}
          resizeMode={ResizeMode.COVER}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          onReadyForDisplay={() => {
            video?.current?.playAsync();
          }}
          isLooping={false}
        />
        <View
          style={{
            position: "absolute",
            bottom: 2,
            left: 2,
            zIndex: 100,
            width: width - 100,
          }}
        >
          <View className="justify-center px-3 space-y-1">
            <View className="flex flex-row items-center space-x-3">
              <TouchableOpacity
                activeOpacity={0.7}
                className="w-[35px] items-center rounded-full cursor-pointer"
              >
                <View className="relative items-center w-full overflow-hidden rounded-full aspect-square">
                  <Image
                    source={{ uri: userimage }}
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
              <View className="flex flex-row items-center">
                <Text className="dark:text-white text-slate-300">{username}</Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <Image
                    source={require("../../../assets/bluetick.png")}
                    resizeMode="cover"
                    style={{
                      resizeMode: "cover",
                      borderRadius: 100,
                      height: 18,
                      width: 18,
                      zIndex: 100,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text className="dark:text-white text-slate-300">{caption}</Text>
            </View>
            <View className="flex flex-row flex-wrap ">
              {hashtags.map((item, ind) => {
                return (
                  <TouchableOpacity activeOpacity={0.7} key={ind}>
                    <Text className="text-blue-600">
                      #{item}
                      {"  "}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View className="flex flex-row items-center justify-between pb-1 space-x-2">
              <View className="flex flex-row items-center justify-center px-3 py-1 space-x-2 rounded-full bg-slate-800/60 ">
              <Feather name="music" size={15} color="white" />
                <Text className="flex-wrap dark:text-white text-slate-300">
                  {song?.slice(0, 16) + "..."}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                className="flex flex-row items-center justify-center px-3 py-1 space-x-2 rounded-full bg-slate-800/60 "
              >
                <Ionicons
                  name="ios-person"
                  size={15}
                  color="white"
                  style={{ opacity: 100 }}
                />
                <Text className="opacity-100 dark:text-white text-slate-300">
                  {mensition?.length + " people"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            opacity: 100,
            height: 210,
            width: 50,
            right: 2,
            bottom: 60,
          }}
        >
          <View style={{ elevation: 0.3, zIndex: 10 }} className="items-center">
            <View
              style={{ elevation: 0.3, zIndex: 10 }}
              className="items-center space-y-5"
            >
              <View className="items-center justify-center text-center">
                {hasLiked ? (
                  <TouchableOpacity
                    onPress={() => {
                      sethasLiked(!hasLiked);
                    }}
                  >
                    <AntDesign
                      style={{ elevation: 0.3, zIndex: 10 }}
                      name="heart"
                      size={26}
                      color="red"
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      sethasLiked(!hasLiked);
                    }}
                  >
                    <Feather
                      style={{ elevation: 0.3, zIndex: 10 }}
                      name="heart"
                      size={26}
                      color={colorScheme==='dark'?"#fff":"rgb(203 213 225)"}
                    />
                  </TouchableOpacity>
                )}
                <Text className="text-center dark:text-white text-slate-300">{totallikes}</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Feather
                    style={{ elevation: 0.3, zIndex: 10, fontSize: 25, top: 1 }}
                    name="navigation"
                    color={colorScheme==='dark'?"#fff":"rgb(203 213 225)"}
                  />
                </TouchableOpacity>
              </View>
              <View className="items-center justify-center text-center">
                <TouchableOpacity>
                  <FontAwesome5
                    style={{ elevation: 0.3, zIndex: 10 }}
                    name="comment"
                    size={26}
                    color={colorScheme==='dark'?"#fff":"rgb(203 213 225)"}
                  />
                </TouchableOpacity>
                <Text className="text-center dark:text-white text-slate-300">{totalcomment}</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Entypo
                    name="dots-three-vertical"
                    size={22}
                    color={colorScheme==='dark'?"#fff":"rgb(203 213 225)"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            opacity: 100,
            height: 37,
            width: 37,
            right: 10,
            bottom: 2,
            borderRadius: 8,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            className="items-center cursor-pointer "
          >
            <View className="relative items-center w-full overflow-hidden aspect-square">
              <Image
                source={{ uri: userimage }}
                className="w-full h-full transition rounded-lg"
                resizeMode="cover"
                style={{
                  resizeMode: "cover",
                  backgroundColor: "orange",
                  height: "100%",
                  width: "100%",
                  zIndex: 100,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OneReels;
