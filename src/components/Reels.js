import {
  View,
  Text,
  ScrollView,
  useColorScheme,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StyleSheet, Button } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";

let width = Dimensions.get("screen").width;
let height = Dimensions.get("screen").height;

const Reels = () => {
  const colorScheme = useColorScheme();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [isMuted, setIsMuted] = React.useState(false);
  return (
    <View
      style={{
        position: "relative",
        height: height,
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
      <ScrollView>
        <TouchableOpacity
          onPress={()=>{setIsMuted(!isMuted)}}
          activeOpacity={0.9}
          onPressOut={()=>{
            status.isPlaying
              ? null
              : video.current.playAsync();
          }}
          onLongPress={() => {
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync();
          }}
          style={[styles.container, { width: width, height: height }]}
        >
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls={false}
            isMuted={isMuted}
            resizeMode={ResizeMode.COVER}
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            onReadyForDisplay={() => {
              video?.current?.playAsync();
            }}
            isLooping={true}
          />
        </TouchableOpacity>
      </ScrollView>
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
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Reels;
