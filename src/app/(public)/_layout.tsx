import React, { useEffect } from "react";
import { Stack, useRouter, useSegments } from "expo-router";
import { useAuth } from "@/src/services/state/auth";

export default function PublicRootLayout() {
    const { isSignedIn } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
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
            <Stack.Screen
                redirect={isSignedIn}
                name="forgot"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                redirect={isSignedIn}
                name="otpverification"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                redirect={isSignedIn}
                name="resetpassword"
                options={{ headerShown: false }}
            />
        </Stack>
    );
}
