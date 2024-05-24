import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/src/services/state/auth";

const Profile = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  return (
    <View style={{ margin: 50, backgroundColor: "red" }}>
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
