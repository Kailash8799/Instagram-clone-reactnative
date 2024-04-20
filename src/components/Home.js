import { View, Text, ScrollView, Animated, RefreshControl } from "react-native";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Header from "./subcomponent/Header";
import Story from "./subcomponent/Story";
import Post from "./subcomponent/Post";
import CircularProgress from "react-native-circular-progress-indicator";
import { ImagePickerContext } from "./contexts/ImageUpload";
import { useColorScheme } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}


const Home = () => {
  const colorScheme = useColorScheme();
  const [expoPushToken, setExpoPushToken] = useState("");
  const { imageUploadProgress, imageUploading } =
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

  useMemo(() => {
    registerForPushNotificationsAsync()
      .then()
      .catch((err) => {
        console.log("Some error accured" + err);
      });
  }, []);

  
useEffect(() => {
  (async() => {
    try {
      const config = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // "X-Api-Key": "XRxTukn5RqU1ANzvg6PHyw==Rb7pdvsGf4UaGXHX",
        }
      };
      const response = await fetch(
        "https://random-data-api.com/api/v2/users?size=2&is_xml=true",
        config
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
     
    }
  })();
}, [refreshing]);

  const uploadComp = useMemo(() => {
    return imageUploading ? (
      <View
        className="absolute top-0 left-0 right-0 bg-white dark:bg-black"
        style={{ zIndex: 1000 }}
      >
        <View className="w-screen bg-slate-200 dark:bg-slate-800 h-[0.3px]" />
        <View
          className="flex-row items-center h-12 px-4 space-x-5"
          style={{ position: "relative" }}
        >
          <CircularProgress
            radius={20}
            value={Math.trunc(imageUploadProgress)}
            inActiveStrokeColor={"#2ecc71"}
            inActiveStrokeOpacity={0.2}
            progressValueColor={colorScheme === "dark" ? "#ffffff" : "black"}
            valueSuffix={"%"}
            valueSuffixStyle={{ left: -4 }}
          />

          <View className="">
            <Text className="text-lg font-semibold text-black dark:text-white">
              Image uploading...
            </Text>
          </View>
        </View>
        <View className="w-screen bg-slate-200 dark:bg-slate-800 h-[0.3px]" />
      </View>
    ) : null;
  }, [imageUploading, imageUploadProgress]);

  const PostsComp = useMemo(() => <Post />, []);

  return (
    <>
      <View className="bg-white dark:bg-black">
        {uploadComp}
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
              progressViewOffset={25}
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

          <View className="w-screen bg-slate-200 dark:bg-slate-800 h-[0.3px]"></View>
          {PostsComp}
        </ScrollView>
      </View>
    </>
  );
};

export default Home;
