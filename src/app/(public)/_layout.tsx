import React, { useEffect } from "react";
import { Stack, useRouter, useSegments } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function PublicRootLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    const inTabsGroup = segments[0] === "(public)";
    if (isSignedIn && inTabsGroup) {
      router.replace("/home/");
    }
  }, [isSignedIn]);

  return (
    <Stack initialRouteName="signup" screenOptions={{ animation: "ios" }}>
      <Stack.Screen
        redirect={isSignedIn}
        name="login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        redirect={isSignedIn}
        name="signup"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
