import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useAuth, useUser } from "@clerk/clerk-expo";

const Profile = () => {
  const { signOut, isSignedIn } = useAuth();
  const router = useRouter();
  const Login = () => {
    signOut();
  };
  const { user } = useUser();
  console.log(user?.username);

  return (
    <View style={{ margin: 50, backgroundColor: "red" }}>
      <TouchableOpacity onPress={Login}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
