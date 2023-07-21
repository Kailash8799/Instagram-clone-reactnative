// import React, { useState, useEffect, useContext } from "react";
// import { Button, Image, View, Platform, StyleSheet, Alert } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import { db, storage } from "../../firebase";
// import {
//   addDoc,
//   collection,
//   doc,
//   serverTimestamp,
//   updateDoc,
// } from "firebase/firestore";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { ImagePickerContext } from "./contexts/ImageUpload";

// export default function Create({ navigation }) {
//   const {uploadImage, setuploadImage} = useContext(ImagePickerContext)
//   const [mediapermission, setmediapermission] = useState(null);
//   const [mounted, setMounted] = useState(false);
//   const [percentage, setpercentage] = useState(0);

//   useEffect(() => {
//     (async () => {
//       setMounted(true);
//       const gellarystatus =
//         await ImagePicker.requestMediaLibraryPermissionsAsync();
//       setmediapermission(gellarystatus.status === "granted");
//     })();
//   }, []);

//   const pickImage = async () => {
//     try {
//       if (!mediapermission) {
//         Alert.alert("No media permission");
//         return;
//       }
//       // No permissions request is necessary for launching the image library
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker?.MediaTypeOptions?.Images,
//         allowsEditing: true,
//         aspect: [4, 6],
//         quality: 1,
//       });
//       if (!result?.canceled) {
//         setuploadImage(result?.assets[0]?.uri)
//       }
//     } catch (error) {
//       Alert.alert("Some error accured!")
//     }
//   };
//   if (!mounted) {
//     return;
//   }
//   const uploadImageindatabase = async (e) => {
//     try {
//     e.preventDefault();
//     const responce = await fetch(uploadImage);
//     const blob = await responce.blob();
//     const posti = await addDoc(collection(db, "posts"), {
//       filename: "kailash",
//       timestamp: serverTimestamp(),
//     });

//     const upbr = uploadBytesResumable(
//       ref(storage, `images/${posti.id}/posts`),
//       blob
//     );
//     upbr.on(
//       "state_changed",
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setpercentage(progress);
//       },
//       (error) => {
//         console.log(error);
//       },
//       () => {
//         getDownloadURL(upbr.snapshot.ref).then((du) => {
//           updateDoc(doc(db, "posts", posti.id), {
//             url: du,
//           });
//         });
//         navigation.navigate("Home")
//       }
//     );

//   } catch (error) {
//       Alert.alert("Some error accured")
//   }
//   };
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Button title="Pick an image from camera roll" onPress={pickImage} />
//       <Button
//         title="Pick an image from camera"
//         onPress={() => {
//           navigation.navigate("Camerascreen");
//         }}
//       />
//       <View style={styles.container}>
//         <View style={styles.imageContainer}>
//           {uploadImage ? (
//             <Image source={{ uri: uploadImage }} style={styles.image} />
//           ) : (
//             <View style={[styles.image, { backgroundColor: "green" }]}></View>
//           )}
//         </View>
//       </View>
//       <Button title={`${percentage}`} onPress={uploadImageindatabase} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   image: {
//     width: 320,
//     height: 440,
//     borderRadius: 18,
//   },
// });

import { View, Text, Dimensions, Image } from "react-native";
import React, { useEffect, useRef } from "react";
import { TouchableOpacity } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { BackHandler } from "react-native";

const { width, height } = Dimensions.get("window");

const Create = ({ navigation }) => {
  const videoCreate = useRef(null);
  useEffect(() => {
  
    return () => {
      console.log("Back going");
    }
  }, [navigation])

  
  return (
    <View
      style={{ width: width, height: height }}
      className="bg-white dark:bg-black"
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate("Camerascreen");
        }}
        style={{ width: width, height: height / 3 - 6 }}
        className="bg-green-500"
      >
        <Image
          source={require("../../assets/camera.webp")}
          // resizeMode=""
          width={width}
          style={{ width: "100%", height: 250 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ width: width, height: height / 3 - 16 }}
        className="bg-green-500"
      >
        <Image
          source={require("../../assets/gallery.jpg")}
          // resizeMode=""
          width={width}
          style={{ width: "100%", height: 240 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ width: width, height: height / 3 }}
        className="bg-green-900"
      >
        <Video
          ref={videoCreate}
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/up_video.mp4")}
          useNativeControls={false}
          isMuted={true}
          resizeMode={ResizeMode.COVER}
          onReadyForDisplay={() => {
            videoCreate?.current?.playAsync();
          }}
          isLooping={true}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Create;
