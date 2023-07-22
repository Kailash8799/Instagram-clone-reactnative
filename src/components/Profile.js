import { View, Text, RefreshControl, Share, Alert } from "react-native";
import React, { useEffect } from "react";
import ProfileHeader from "./subcomponent/Profile/ProfileHeader";
import { ScrollView } from "react-native";
import ProfileImage from "./subcomponent/Profile/ProfileImage";
import ProfileBio from "./subcomponent/Profile/ProfileBio";
import EditProfile from "./subcomponent/Profile/EditProfile";
import Storyhighlites from "./subcomponent/Profile/Storyhighlites";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyImages from "./subcomponent/MyImages";
import Mementions from "./subcomponent/Mementions";
import { useColorScheme } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import MyVidoes from "./subcomponent/MyVideos";

const Tab = createMaterialTopTabNavigator();

const Profile = ({navigation}) => {
  
  const colorScheme = useColorScheme();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <View className="bg-white dark:bg-black">
      <ProfileHeader />
      <ScrollView
        refreshControl={
            <RefreshControl  refreshing={refreshing}  onRefresh={onRefresh} />
          }
        contentContainerStyle={{ flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      >
        <View className="bg-white dark:bg-black">
          <ProfileImage />
          <ProfileBio />
          <EditProfile onShare={onShare}/>
          <Storyhighlites />
        </View>
        <Tab.Navigator
        style={{flex:1,minHeight:720}}
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: colorScheme === "dark" ? "#ffffff" : "black",
            tabBarStyle: {
              backgroundColor: colorScheme === "dark" ? "black" : "#ffffff",
            },
            tabBarShowLabel: false,
            tabBarInactiveTintColor:
              colorScheme === "dark" ? "#ffffff" : "black",
            tabBarPressOpacity: 1,
            tabBarIndicatorStyle: {
              backgroundColor: colorScheme === "dark" ? "#ffffff" : "black",
            },
            tabBarLabelStyle: {
              textTransform: "none",
              fontSize: 16,
              fontWeight: "500",
            },
            swipeEnabled: true,
            tabBarIcon: ({ focused, colour }) => {
              let iconName;
              let size;
              if (route.name === "Posts") {
                iconName = focused ? "ios-apps-sharp" : "ios-apps-sharp";
                colour = focused
                  ? colorScheme === "dark"
                    ? "white"
                    : "black"
                  : colorScheme === "dark"
                  ? "#BABABA"
                  : "gray";
                size = 20;
              } else if (route.name === "Video") {
                iconName = focused
                  ? "ios-play-circle"
                  : "ios-play-circle-outline";
                colour = focused
                  ? colorScheme === "dark"
                    ? "white"
                    : "black"
                  : colorScheme === "dark"
                  ? "#BABABA"
                  : "gray";
                size = 24;
              } else if (route.name === "Mentions") {
                iconName = focused ? "ios-person" : "ios-person-outline";
                colour = focused
                  ? colorScheme === "dark"
                    ? "white"
                    : "black"
                  : colorScheme === "dark"
                  ? "#BABABA"
                  : "gray";
                size = 20;
              }
              return <Ionic name={iconName} size={size} color={colour} />;
            },
          })}
        >
          <Tab.Screen
            name="Posts"
            component={MyImages}
            options={{ title: "Posts" }}
          />
          <Tab.Screen
            name="Video"
            component={MyVidoes}
            options={{ title: "Video" }}
          />
          <Tab.Screen
            name="Mentions"
            component={Mementions}
            options={{ title: "Mentions" }}
          />
        </Tab.Navigator>
      </ScrollView>
    </View>
  );
};

export default Profile;
