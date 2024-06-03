import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { StatusBar } from "react-native";
import { DarkTheme, DefaultTheme } from "@/src/utils/theme/theme";
import { useAuth } from "@/src/services/state/auth";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetProvider } from "../services/providers/BottomSheetProvider";

export { ErrorBoundary } from "expo-router";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        ...FontAwesome.font,
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetProvider>
                <RootLayoutNav />
            </BottomSheetProvider>
        </GestureHandlerRootView>
    );
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();
    const { isSignedIn, refreshAuth, isLoaded } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (isLoaded) return;
        const inTabsGroup = segments[0] === "(auth)";
        if (isSignedIn && !inTabsGroup) {
            router.replace("/home/");
        } else if (!isSignedIn) {
            router.replace("/login");
        }
    }, [isSignedIn, refreshAuth, isLoaded]);

    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <StatusBar
                barStyle={
                    colorScheme === "dark" ? "light-content" : "dark-content"
                }
                animated={true}
                networkActivityIndicatorVisible={true}
                showHideTransition={"slide"}
                translucent={false}
                backgroundColor={colorScheme === "dark" ? "#000" : "white"}
            />
            <Slot />
        </ThemeProvider>
    );
}
