import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "expo-router";
import { useThemeConstant } from "@/src/hooks/useThemeConstant";
import { SafeAreaView } from "react-native-safe-area-context";

const UploadPost = () => {
    const navigation = useNavigation();
    const { commonTheme } = useThemeConstant();

    useEffect(() => {}, []);

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: commonTheme.background }}>
                <Text style={{ color: commonTheme.color }}>UploadPost</Text>
            </View>
        </SafeAreaView>
    );
};

export default UploadPost;

const styles = StyleSheet.create({});
