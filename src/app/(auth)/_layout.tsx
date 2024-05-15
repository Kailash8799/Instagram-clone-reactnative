import React, { useEffect } from "react";
import {
  Stack,
  useRouter,
  useSegments,
} from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function ProtectedRootLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    const inTabsGroup = segments[0] === "(auth)";
    if (!isSignedIn && inTabsGroup) {
      console.log("Hey i am here ");
      router.replace("/login")
    }
  }, [isSignedIn]);

  return (
    <Stack initialRouteName="(tabs)" screenOptions={{ animation: "ios" }}>
      <Stack.Screen
        redirect={!isSignedIn}
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        redirect={!isSignedIn}
        name="create/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        redirect={!isSignedIn}
        name="create/upload/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        redirect={!isSignedIn}
        name="storyview"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
