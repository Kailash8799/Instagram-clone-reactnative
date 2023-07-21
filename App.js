import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./src/screens/Homescreen";
import { StatusBar } from "react-native";
const Stack = createNativeStackNavigator();
import { useColorScheme } from "react-native";
import CameraScreen from "./src/screens/CameraScreen";
import UploadPostContext from "./src/components/contexts/ImageUpload";
import PostImage from "./src/screens/PostImage";

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <UploadPostContext>
      <NavigationContainer>
        <StatusBar
          backgroundColor={colorScheme === "dark" ? "black" : "white"}
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
          showHideTransition={"fade"}
          animated={true}
        />
        <Stack.Navigator initialRouteName="Homescreen">
          <Stack.Screen
            name="Homescreen"
            options={{ headerShown: false, animation: "slide_from_right" }}
            component={Homescreen}
          />
          <Stack.Screen
            name="Camerascreen"
            options={{ headerShown: false, animation: "slide_from_right" }}
            component={CameraScreen}
          />
          <Stack.Screen
            name="PostImage"
            options={{ headerShown: false, animation: "slide_from_right" }}
            component={PostImage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UploadPostContext>
  );
}
