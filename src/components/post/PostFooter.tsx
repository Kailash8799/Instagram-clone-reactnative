import React from "react";
import {
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    View,
    useColorScheme,
} from "react-native";
import { Text } from "../Themed";
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { blurhash, constimage } from "@/src/constants/constant";
const { width } = Dimensions.get("screen");

const PostFooter = () => {
    const colorScheme = useColorScheme();
    const isBookmarked = false;
    const isLiked = false;
    const color = colorScheme === "dark" ? "#fff" : "#000";
    return (
        <View style={styles.container}>
            <View style={styles.iconfooter}>
                <View style={styles.lefticons}>
                    {isLiked ? (
                        <TouchableOpacity activeOpacity={0.7}>
                            <AntDesign name="heart" size={25} color={color} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity activeOpacity={0.7}>
                            <AntDesign name="hearto" size={25} color={color} />
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.margincenter}
                    >
                        <FontAwesome name="comment-o" size={27} color={color} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Feather name="navigation" size={26} color={color} />
                    </TouchableOpacity>
                </View>
                <View>
                    {isBookmarked ? (
                        <TouchableOpacity activeOpacity={0.7}>
                            <FontAwesome
                                name="bookmark"
                                size={26}
                                color={color}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity activeOpacity={0.7}>
                            <FontAwesome
                                name="bookmark-o"
                                size={26}
                                color={color}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <View style={styles.paddingHorizontal}>
                <Text style={[{ color }]}>5000 likes</Text>
            </View>
            <View style={styles.paddingHorizontal}>
                <Text style={[{ color }]}>
                    <Text style={{ fontWeight: "bold" }}>kailash8799 </Text>
                    <Text style={[{ color: "grey" }]}>9m{" • "}</Text>
                    <Text style={[{ color }]}>
                        Hey my name is kailasj and i am posting this because i
                        am creating demo instagram clone using react native so
                        that why i am building this app
                    </Text>
                </Text>
            </View>
            <View style={styles.paddingcommentbox}>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <View>
                        <Image
                            style={styles.image}
                            source={constimage}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={1000}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text
                            numberOfLines={1}
                            style={[
                                styles.commentbox,
                                {
                                    color:
                                        colorScheme === "dark"
                                            ? "gray"
                                            : "black",
                                },
                            ]}
                        >
                            Add a comment...
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.spacer} />
        </View>
    );
};

export default PostFooter;

const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 30,
        backgroundColor: "#0553",
        borderRadius: 50,
    },
    commentbox: {
        color: "grey",
        height: 40,
        paddingHorizontal: 5,
        flex: 1,
        display: "flex",
        flexDirection: "row",
        textAlignVertical: "center",
    },
    paddingcommentbox: {
        paddingHorizontal: 13,
        display: "flex",
        width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    spacer: {
        height: 2,
    },
    container: {
        width,
    },
    paddingHorizontal: {
        paddingHorizontal: 13,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    iconfooter: {
        height: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 13,
    },
    lefticons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    margincenter: {
        marginHorizontal: 15,
    },
});
