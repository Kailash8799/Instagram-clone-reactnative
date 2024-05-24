import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useAuth } from "../services/state/auth";
import { tokenCache } from "../utils/token";
import { errorHandler } from "../utils/errorHandler";

const InitialPage = () => {
  const { refreshAuth, setRefresh, isLoading, setIsSignIn } =
    useAuth();

  const validateToken = useCallback(
    errorHandler(async () => {
      if (isLoading) return;
      const token = await tokenCache.getToken("token");
      if (token) {
        setRefresh(!refreshAuth);
        setIsSignIn(true);
      } else {
        tokenCache.removeToken("token");
        setRefresh(!refreshAuth);
        setIsSignIn(false);
      }
    }),
    []
  );

  useEffect(() => {
    validateToken();
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default InitialPage;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
});
