import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    slug: "Instagram",
    name: "Instagram",
    version: "1.0.0",
    android: {
        permissions: ["INTERNET"],
    },
    extra: {
        // clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
    plugins: ["expo-router", "expo-font", "expo-secure-store"],
});
