import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const InitialPage = () => {
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
