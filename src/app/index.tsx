import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useAuth } from "../services/state/auth";
import { tokenCache } from "../utils/token";
import { errorHandler } from "../utils/errorHandler";
import { useThemeConstant } from "../hooks/useThemeConstant";

const InitialPage = () => {
    const { refreshAuth, setRefresh, isLoading, setIsSignIn, setIsLoaded } =
        useAuth();
    const { commonTheme } = useThemeConstant();

    const validateToken = useCallback(
        errorHandler(async () => {
            if (isLoading) return;
            const token = await tokenCache.getToken("token");
            if (token) {
                setIsSignIn(true);
                setRefresh(!refreshAuth);
            } else {
                await tokenCache.removeToken("token");
                setIsSignIn(false);
                setRefresh(!refreshAuth);
            }
            setIsLoaded(false);
        }),
        [refreshAuth]
    );

    useEffect(() => {
        validateToken();
    }, []);
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: commonTheme.background },
            ]}
        >
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

export default InitialPage;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center" },
});
