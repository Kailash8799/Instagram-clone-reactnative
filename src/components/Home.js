import {
  View,
  Text,
  ScrollView,
  Animated,
  Alert,
  RefreshControl,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import Header from "./subcomponent/Header";
import Story from "./subcomponent/Story";
import Post from "./subcomponent/Post";
// import * as Svg from "react-native-svg";
import { Svg, Circle, Rect, Path } from "react-native-svg";
import CircularProgress from "react-native-circular-progress-indicator";
import { ImagePickerContext } from "./contexts/ImageUpload";
import { useColorScheme } from "react-native";

const { width, height } = Dimensions.get("screen");
const Circle_Length = 100;
const Radius = Circle_Length / (2 * Math.PI);

const Home = () => {
  const colorScheme = useColorScheme();
  const { imageUploadProgress, setimageUploadProgress, imageUploading } =
    useContext(ImagePickerContext);
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -45],
  });

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      <View className="bg-white dark:bg-black">
        <Animated.View
          style={{
            transform: [{ translateY: translateY }],
            elevation: 1,
            zIndex: 100,
          }}
        >
          <Header translateY={translateY} />
        </Animated.View>
        <ScrollView
          refreshControl={
            <RefreshControl
              progressViewOffset={15}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          pinchGestureEnabled={false}
          showsVerticalScrollIndicator={false}
          onScroll={(e) => {
            scrollY.setValue(e.nativeEvent.contentOffset.y);
          }}
        >
          <View
            style={{ height: 45, width: "100%" }}
            className="w-full bg-white dark:bg-black"
          ></View>
          <Story />
          {imageUploading && (
            <View>
              <View className="w-screen bg-slate-200 dark:bg-slate-800 h-[0.3px]"></View>
              <View
                className="flex-row items-center h-12 px-4 space-x-5"
                style={{ position: "relative" }}
              >
                <CircularProgress
                  radius={20}
                  value={Math.trunc(imageUploadProgress)}
                  inActiveStrokeColor={"#2ecc71"}
                  inActiveStrokeOpacity={0.2}
                  progressValueColor={colorScheme === "dark" ? "#fff" : "black"}
                  valueSuffix={"%"}
                  valueSuffixStyle={{left:-4}}
                />
                
                <View className="">
                  <Text className="text-lg font-semibold text-black dark:text-white">
                    Image uploading...
                  </Text>
                </View>
              </View>
            </View>
          )}
          <View className="w-screen bg-slate-200 dark:bg-slate-800 h-[0.3px]"></View>
          <Post />
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
