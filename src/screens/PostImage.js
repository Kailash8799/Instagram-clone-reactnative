import React, { useState, useEffect, useContext, useRef } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  Alert,
  useColorScheme,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { db, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { BackHandler } from "react-native";
import { ImagePickerContext } from "../components/contexts/ImageUpload";
import { Dimensions } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

const { height, width } = Dimensions.get("screen");

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Can use this function below OR use Expo's Push Notification Tool from: https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Instagram",
    body: "Your image uploaded",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

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

export default function PostImage({ navigation }) {
  const colorScheme = useColorScheme();
  const {
    uploadImage,
    setuploadImage,
    imageUploading,
    setimageUploading,
    imageUploadProgress,
    setimageUploadProgress,
  } = useContext(ImagePickerContext);
  const [mediapermission, setmediapermission] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [percentage, setpercentage] = useState(0);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    (async () => {
      setMounted(true);
      const gellarystatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setmediapermission(gellarystatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    try {
      if (!mediapermission) {
        Alert.alert("No media permission");
        return;
      }
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker?.MediaTypeOptions?.Images,
        allowsEditing: true,
        aspect: [4, 6],
        quality: 1,
      });
      if (!result?.canceled) {
        setuploadImage(result?.assets[0]?.uri);
      }
    } catch (error) {
      Alert.alert("Some error accured!");
    }
  };
  if (!mounted) {
    return;
  }
  const uploadImageindatabase = async (e) => {
    try {
      const responce = await fetch(uploadImage);
      const blob = await responce.blob();
      const posti = await addDoc(collection(db, "posts"), {
        filename: "kailash",
        timestamp: serverTimestamp(),
      });
      const upbr = uploadBytesResumable(
        ref(storage, `images/${posti.id}/posts`),
        blob
      );
      upbr.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setimageUploading(true);
          setimageUploadProgress(progress);
        },
        (error) => {
          console.log(error);
          setimageUploading(false);
          setimageUploadProgress(0);
        },
        async() => {
          getDownloadURL(upbr.snapshot.ref).then((du) => {
            updateDoc(doc(db, "posts", posti.id), {
              url: du,
            });
          });
          await sendPushNotification(expoPushToken);
          setimageUploading(false);
          setimageUploadProgress(0);
        }
      );
    } catch (error) {
      Alert.alert("Some error accured");
    }
  };
  return (
    <ScrollView
      style={{
        height: height,
        width: width,
      }}
      className="bg-white dark:bg-black"
    >
      {uploadImage ? (
        <View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Change Image",
                "Are you sure you want change image?",
                [
                  {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel",
                  },
                  {
                    text: "YES",
                    onPress: () => navigation.navigate("Camerascreen"),
                  },
                ]
              );
            }}
            activeOpacity={1}
            style={{ width: width, height: height / 1.7 }}
          >
            <Image source={{ uri: uploadImage }} className="w-full h-full" />
          </TouchableOpacity>
          <View className="mx-3.5">
            <View className="mt-3">
              <Text className="text-lg text-black dark:text-white">
                Caption
              </Text>
            </View>
            <View>
              <View className="flex flex-row items-center px-2 my-1 space-x-2 bg-gray-200 rounded-md dark:bg-zinc-700">
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                  <TextInput
                    placeholderTextColor={
                      colorScheme === "dark" ? "white" : "black"
                    }
                    multiline
                    numberOfLines={2}
                    maxLength={200}
                    placeholder="add caption"
                    style={{ width: width - 66 }}
                    className="text-black dark:text-white"
                  />
                </KeyboardAvoidingView>
              </View>
            </View>
            <View className="mt-3">
              <Text className="text-lg text-black dark:text-white">Tags</Text>
            </View>
            <View>
              <View className="flex flex-row items-center px-2 my-1 space-x-2 bg-gray-200 rounded-md dark:bg-zinc-700">
                <TextInput
                  placeholderTextColor={
                    colorScheme === "dark" ? "white" : "black"
                  }
                  multiline
                  numberOfLines={2}
                  maxLength={40}
                  placeholder="add tags"
                  style={{ width: width - 66 }}
                  className="text-black dark:text-white"
                />
              </View>
            </View>
          </View>
          <View className="mt-6">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                uploadImageindatabase();
                navigation.navigate("Homescreen");
              }}
              className="items-center py-3 mx-6 rounded-lg dark:bg-zinc-700 bg-zinc-500/20"
            >
              <Text className="text-black dark:text-white">Post</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 80, width: width }} />
        </View>
      ) : (
        <View
          className="justify-center"
          style={{
            height: height,
            width: width,
          }}
        >
          <Text className="text-xl font-medium text-center text-black dark:text-white">
            No image found!
          </Text>
          <Text className="mx-5 space-y-0 text-lg font-normal text-center text-black dark:text-white">
            Please pick the image form gallery or camera
          </Text>
          <View className="flex flex-row justify-around mt-6">
            <TouchableOpacity
              className="px-5 py-2 rounded-lg bg-zinc-500/50"
              activeOpacity={0.7}
            >
              <Text className="text-lg font-medium text-black dark:text-white">
                Gallery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Camerascreen");
              }}
              className="px-5 py-2 rounded-lg bg-zinc-500/50"
              activeOpacity={0.7}
            >
              <Text className="text-lg font-medium text-black dark:text-white">
                Camera
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
