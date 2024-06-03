import React, { useCallback, useMemo, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useThemeConstant } from "@/src/hooks/useThemeConstant";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { blurhash } from "@/src/constants/constant";
import AllImages from "@/src/components/create/AllImages";
import { useUploadImageStore } from "@/src/services/state/uploadImage";

const { width } = Dimensions.get("screen");

const Create = () => {
    const { commonTheme } = useThemeConstant();
    const { image: uploadimage } = useUploadImageStore();
    const router = useRouter();
    const colorScheme = useColorScheme();

    const allimage = useMemo(() => <AllImages />, []);

    const goBack = useCallback(() => {
        if (router.canGoBack()) {
            router.back();
        }
    }, []);
    const goNext = useCallback(() => {
        router.push("/create/upload/");
    }, []);

    return (
        <SafeAreaView>
            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: commonTheme.background,
                        borderBottomColor:
                            colorScheme === "dark" ? "#362f2f" : "#ded9d9",
                        borderBottomWidth: 1,
                    },
                ]}
            >
                <View style={[styles.header]}>
                    <TouchableOpacity onPress={goBack} activeOpacity={0.7}>
                        <AntDesign
                            name="close"
                            size={26}
                            color={commonTheme.color}
                        />
                    </TouchableOpacity>
                    <View style={[styles.marginLeft]}>
                        <Text
                            style={[styles.text, { color: commonTheme.color }]}
                        >
                            New Post
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={goNext} activeOpacity={0.6}>
                    <Text style={styles.next}>Next</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    width,
                    height: width,
                    borderBottomColor:
                        colorScheme === "dark" ? "#362f2f" : "#ded9d9",
                    borderBottomWidth: 1,
                }}
            >
                <Image
                    source={{ uri: uploadimage ?? "" }}
                    placeholder={blurhash}
                    contentFit="cover"
                    transition={1000}
                    style={{
                        height: width,
                    }}
                />
            </View>
            {allimage}
        </SafeAreaView>
    );
};

export default Create;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 10,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    marginLeft: {
        marginLeft: 20,
    },
    text: { fontSize: 18, fontWeight: "800" },
    next: { color: "#2e84e6", fontSize: 16 },
});
