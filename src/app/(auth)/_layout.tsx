import React, { useEffect } from "react";
import {
  Stack,
  useRouter,
  useSegments,
} from "expo-router";
import { useAuth } from "@/src/services/state/auth";

export default function ProtectedRootLayout() {
  const { isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inTabsGroup = segments[0] === "(auth)";
    if (!isSignedIn && inTabsGroup) {
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
