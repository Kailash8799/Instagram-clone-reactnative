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
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import { tokenCache } from "@/src/utils/clerk";

export {
  ErrorBoundary,
} from "expo-router";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
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
    <ClerkProvider
      signInFallbackRedirectUrl={"/home"}
      signInForceRedirectUrl={"/home"}
      allowedRedirectOrigins={["/home", "/login"]}
      tokenCache={tokenCache}
      publishableKey={Constants!.expoConfig!.extra!.clerkPublishableKey}
    >
      <RootLayoutNav />
    </ClerkProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    const inTabsGroup = segments[0] === "(auth)";
    console.log(segments);
    if (isSignedIn && !inTabsGroup) {
      router.replace("/home/");
    } else if (!isSignedIn) {
      router.replace("/login");
    }
  }, [isSignedIn]);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
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
