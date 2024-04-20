import { Camera, CameraType,FlashMode } from "expo-camera";
import { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';

import * as ImagePicker from "expo-image-picker";
import { ImagePickerContext } from "../components/contexts/ImageUpload";

export default function CameraScreen({ navigation }) {
  const {uploadImage, setuploadImage} = useContext(ImagePickerContext)
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [flash, setFlash] = useState(FlashMode.off);
  const [modalvisible, setModalvisible] = useState(false);
  const [camervisible, setcamervisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mediapermission, setmediapermission] = useState(null);
  const cameraRef = useRef(null);
  useEffect(() => {
    setMounted(true);
    setcamervisible(true);
    if (modalvisible) {
      setcamervisible(false);
    }
  }, []);

  useEffect(() => {
    (async () => {
      setMounted(true);
      const gellarystatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setmediapermission(gellarystatus.status === "granted");
    })();
  }, []);
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const takePicture = async () => {
    if(!cameraRef)return;
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();

        if(type === "back"){
          setuploadImage(data?.uri);
        }else if(type === "front"){
          const manipResult = await manipulateAsync(
            data?.uri,
            [{ rotate: 180 }, { flip: FlipType.Vertical }],
            { compress: 1, format: SaveFormat.PNG }
          );
          setuploadImage(manipResult?.uri)
        }else{
          setuploadImage(data?.uri);
        }
        setModalvisible(true);
        setcamervisible(false);
      } catch (error) {}
    }
  };
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
        setcamervisible(false);
        setModalvisible(true);
      }
    } catch (error) {
      Alert.alert("Some error accured!");
    }
  };
  if (!mounted) return;
  return (
    <>
      {camervisible && (
        <View style={styles.container}>
          <Camera
            flashMode={flash}
            ratio="16:9"
            style={styles.camera}
            type={type}
            ref={cameraRef}
          >
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}></TouchableOpacity>
            </View>
          </Camera>
        </View>
      )}
      {camervisible && (
        <View className="absolute left-0 right-0 flex flex-row items-start justify-around bottom-10">
          <TouchableOpacity
            onPress={pickImage}
            className="items-center justify-center p-2.5 rounded-full bg-slate-500/60"
          >
            <View className="items-center justify-center">
              <Entypo name="images" size={30} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={takePicture}
            className="items-center justify-center p-2 rounded-full bg-slate-500/60"
          >
            <View className="items-center justify-center">
              <MaterialIcons name="photo-camera" size={36} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleCameraType}
            className="items-center justify-center p-1 rounded-full bg-slate-500/60"
          >
            <View className="items-center justify-center">
              <MaterialCommunityIcons
                name="rotate-3d-variant"
                size={40}
                color="#fff"
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
      {camervisible && (
        <View className="absolute z-50 right-5 top-4" style={{ zIndex: 100 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="close" size={35} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
      {camervisible && (
        <View className="absolute z-50 left-5 top-4" style={{ zIndex: 100 }}>
          <TouchableOpacity
            onPress={() => {
              setFlash(flash==="off"?FlashMode.on:FlashMode.off);
            }}
          >
            {flash === "on" ? (
              <Ionicons name="flash" size={24} color="#ffff00" />
            ) : (
              <Ionicons name="flash-off" size={24} color="#fff" />
            )}
          </TouchableOpacity>
        </View>
      )}

      <Modal visible={modalvisible}>
        <View className="absolute z-50 rounded-full bg-slate-300/25 right-5 top-4" style={{ zIndex: 100 }}>
          <TouchableOpacity
            onPress={() => {
              setcamervisible(true);
              setModalvisible(false);
            }}
          >
            <AntDesign name="close" size={35} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={1}>
          <Image source={{ uri: uploadImage }} className="w-full h-full" />
        </TouchableOpacity>
        <View className="absolute left-0 right-0 items-center justify-center bottom-4 ">
            <TouchableOpacity onPress={()=>{
              setcamervisible(true)
              setModalvisible(false)
              navigation.navigate("PostImage")
            }} activeOpacity={0.5} className="items-center justify-center text-center rounded-lg bg-zinc-500/40">
              <Text className="items-center justify-center px-10 py-3 text-2xl font-bold text-white ">
                Continue
              </Text>
            </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
