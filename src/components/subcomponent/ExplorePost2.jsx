import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    Modal,
    useColorScheme,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  
  import { Feather } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  import { Entypo } from "@expo/vector-icons";
  
  let width = Dimensions.get("screen").width;
  let height = Dimensions.get("screen").height;
  
  const ExplorePost2 = ({ postlink, userimage, username,widthE,heightE }) => {
    const colorScheme = useColorScheme();
    const [mounted, setMounted] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [hasLiked, sethasLiked] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
    const openModalHandle = () => {
      setOpenModal(!openModal);
    };
    if (!mounted) return;
    return (
      <>
        <TouchableOpacity
          onLongPress={openModalHandle}
          activeOpacity={0.8}
          className="group mb-[3px] gap-1 cursor-pointer "
        >
          <View className="gap2 flex flex-col">
            <View className="aspect-square relative overflow-hidden">
              <Image
                source={{ uri: postlink }}
                resizeMode="cover"
                style={{
                  resizeMode: "cover",
                  backgroundColor: "orange",
                  zIndex: 500,
                  width: widthE,
                  height: heightE,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Modal visible={openModal} transparent={true} animationType="fade">
          <TouchableOpacity
            style={{ width: width, height: height ,backgroundColor:'rgba(52,52,52,0.8)'}}
            onPress={openModalHandle}
            className="items-center justify-center "
          >
            <TouchableOpacity
              onPress={(e) => {
                e.stopPropagation();
              }}
              activeOpacity={0.9}
              style={{
                backgroundColor: "green",
                width: width - 30,
                top: -50,
                borderRadius: 10,
              }}
              className="shadow-lg shadow-gray-500 dark:shadow-gray-500"
            >
              <View className="h-12 bg-white justify-center px-2 dark:bg-zinc-800 rounded-t-lg">
                <View className="flex flex-row items-center  space-x-3">
                  <TouchableOpacity
                    activeOpacity={0.7}
                    className="w-[35px] items-center rounded-full cursor-pointer"
                  >
                    <View className="relative items-center  w-full overflow-hidden rounded-full aspect-square">
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
                    <Text className="text-black dark:text-white">{username}</Text>
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
              </View>
              <View className="gap2 flex flex-col">
                <View className="aspect-square relative overflow-hidden">
                  <Image
                    source={{ uri: postlink }}
                    resizeMode="cover"
                    style={{
                      backgroundColor: "orange",
                      zIndex: 500,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </View>
              </View>
              <View className="h-12 justify-center bg-white dark:bg-zinc-800 rounded-b-lg">
                <View
                  style={{ elevation: 0.3, zIndex: 10 }}
                  className="flex flex-row  justify-around items-center"
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
                  <FontAwesome
                  name="user-circle-o"
                  size={24}
                  color={colorScheme === "dark" ? "white" : "black"}
                />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather
                      style={{
                        elevation: 0.3,
                        zIndex: 10,
                        fontSize: 25,
                        top: 1,
                      }}
                      name="navigation"
                      color={colorScheme === "dark" ? "white" : "black"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Entypo
                      name="dots-three-vertical"
                      size={22}
                      color={colorScheme === "dark" ? "white" : "black"}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </>
    );
  };
  
  export default ExplorePost2;
  