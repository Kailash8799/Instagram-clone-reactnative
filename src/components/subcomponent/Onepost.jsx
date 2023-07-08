import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
  Dimensions,
  Animated,
  TextInput,
  Button,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  State,
} from "react-native-gesture-handler";
import "react-native-gesture-handler"
import {} from "react-native-reanimated";
import Modal from "react-native-modal";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const Onepost = ({
  id,
  username,
  userimage,
  postlink,
  caption,
  time,
  isvideo,
  hashtags,
}) => {
  const colorScheme = useColorScheme();
  const [hasLiked, sethasLiked] = useState(false);
  const [hasbookmark, sethasbookmark] = useState(false);
  const [totallikes, settotallikes] = useState(1002);
  const [totallcomments, settotallcomments] = useState(233);
  const [addcomment, setaddcomment] = useState("");
  const ref = useRef(null).current;
  const scale = useRef(new Animated.Value(1)).current;
  const onZoomEventFunction = Animated.event(
    [
      {
        nativeEvent: { scale: scale },
      },
    ],
    {
      useNativeDriver: true,
    }
  );
  const onZoomStateChange = (event) => {
    if (event.nativeEvent.oldState == State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };
  const doubleTap = useCallback(() => {}, []);
  const postComment = () => {
    console.log(addcomment);
    setaddcomment("");
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View className="bg-white dark:bg-black">
      <View className="py-2">
        <View className="flex flex-row items-center justify-between px-2.5">
          <View className="flex flex-row items-center justify-center space-x-3">
            <LinearGradient
              colors={["#bc2a8d", "#e95950", "#fccc63"]}
              style={{ borderRadius: 100, padding: 2 }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                className="w-[45px] rounded-full cursor-pointer bg-white dark:bg-black p-[2px]"
              >
                <View className="relative items-center justify-center w-full overflow-hidden rounded-full aspect-square">
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
            </LinearGradient>
            <View className="flex flex-row items-center">
              <Text className="text-black dark:text-white">{username}</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Image
                  source={require("../../../assets/bluetick.png")}
                  resizeMode="cover"
                  style={{
                    resizeMode: "cover",
                    borderRadius: 100,
                    height: 20,
                    width: 20,
                    zIndex: 100,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={toggleModal}  activeOpacity={0.7}>
            <Entypo
              name="dots-three-vertical"
              size={22}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </TouchableOpacity>
        </View>
        <View className="py-2">
          <View className="flex flex-col w-full gap2">
            <View className="relative flex-1 w-full aspect-square">
              <GestureHandlerRootView style={{ flex: 1 }}>
                <PinchGestureHandler
                  ref={ref}
                  onGestureEvent={onZoomEventFunction}
                  onHandlerStateChange={onZoomStateChange}
                  cancelsTouchesInView={false}
                  shouldCancelWhenOutside={true}
                >
                  <Animated.View
                    style={{ width: width, height: width, elevation: 100 }}
                  >
                    <Animated.Image
                      source={{ uri: postlink }}
                      resizeMode="cover"
                      style={{
                        resizeMode: "cover",
                        backgroundColor: "orange",
                        zIndex: 500,
                        width: width,
                        height: "100%",
                        transform: [{ scale: scale }],
                      }}
                    />
                  </Animated.View>
                </PinchGestureHandler>
              </GestureHandlerRootView>
            </View>
          </View>
        </View>
        <View
          style={{ elevation: 0.3, zIndex: 10 }}
          className="flex flex-row items-center justify-between px-4"
        >
          <View
            style={{ elevation: 0.3, zIndex: 10 }}
            className="flex flex-row items-center space-x-5 "
          >
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
                  color={colorScheme === "dark" ? "white" : "black"}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity>
              <FontAwesome5
                style={{ elevation: 0.3, zIndex: 10 }}
                name="comment"
                size={26}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                style={{ elevation: 0.3, zIndex: 10, fontSize: 25, top: 1 }}
                name="navigation"
                color={colorScheme === "dark" ? "white" : "black"}
              />
            </TouchableOpacity>
          </View>
          <View>
            {hasbookmark ? (
              <TouchableOpacity
                onPress={() => {
                  sethasbookmark(!hasbookmark);
                }}
              >
                <FontAwesome
                  style={{ elevation: 0.3, zIndex: 10 }}
                  name="bookmark"
                  size={24}
                  color={colorScheme === "dark" ? "white" : "black"}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  sethasbookmark(!hasbookmark);
                }}
              >
                <FontAwesome
                  style={{ elevation: 0.3, zIndex: 10 }}
                  name="bookmark-o"
                  size={26}
                  color={colorScheme === "dark" ? "white" : "black"}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View className="px-4  py-[1px]">
          {hasLiked ? (
            <Text className="font-medium text-black dark:text-white">
              Liked by you and {totallikes} others
            </Text>
          ) : (
            <Text className="font-medium text-black dark:text-white">
              {totallikes} likes
            </Text>
          )}
        </View>
        <View className="px-4  py-[1px]">
          <Text className="text-black dark:text-white">
            <Text className="font-bold">
              {username}
              {"  "}
            </Text>
            <Text>{caption}</Text>
          </Text>
        </View>
        <View className="flex flex-row flex-wrap px-4 py-[1px]">
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
        <View className="mx-4  py-[1px]">
          <TouchableOpacity activeOpacity={0.7}>
            <Text className="font-light text-black dark:text-gray-500">
              View all {totallcomments} comments
            </Text>
          </TouchableOpacity>
        </View>
        <View className="px-4 py-[3px]">
          <View className="flex flex-row items-center justify-between space-x-2">
            <View className="flex flex-row items-center space-x-2">
              <TouchableOpacity
                activeOpacity={0.7}
                className="w-[35px] rounded-full cursor-pointer bg-white dark:bg-black p-[2px]"
              >
                <View className="relative items-center justify-center w-full overflow-hidden rounded-full aspect-square">
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
              <TextInput
                onChangeText={(e) => {
                  setaddcomment(e);
                }}
                value={addcomment}
                className={`text-black dark:text-white w-[200px]`}
                style={{ borderWidth: 0 }}
                placeholder="Add a comment..."
                placeholderTextColor={colorScheme === "dark" ? "gray" : "black"}
              />
            </View>
            <TouchableOpacity onPress={postComment} activeOpacity={0.7}>
              <Text className="text-blue-500">post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
        <Modal
          style={{width:"100%",marginLeft:0,marginBottom:0}}
          isVisible={isModalVisible}
          hideModalContentWhileAnimating={true}
          hasBackdrop={true}
          backdropColor="black"
          onSwipeCancel={() => {
            toggleModal()
          }}
          backdropOpacity={0.3}
          onTouchCancel={toggleModal}
          swipeDirection={"down"}

        >
          <View style={{ flex: 1}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                position: "absolute",
                bottom: 0,
                height: 200,
                width:"100%",
                backgroundColor: "red",
              }}
            >
              <Text className="text-black dark:text-white">{caption}</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    </View>
  );
};

export default Onepost;
