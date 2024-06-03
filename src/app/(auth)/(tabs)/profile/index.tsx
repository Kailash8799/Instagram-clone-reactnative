import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/src/services/state/auth";
import { tokenCache } from "@/src/utils/token";

const Profile = () => {
    const { isSignedIn, setIsSignIn, setRefresh, refreshAuth } = useAuth();
    const router = useRouter();

    const logout = async () => {
        await tokenCache.removeToken("token");
        setIsSignIn(false);
        setRefresh(!refreshAuth);
    };

    return (
        <View style={{ margin: 50, backgroundColor: "red" }}>
            <TouchableOpacity onPress={logout}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;
