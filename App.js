import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./src/screens/Homescreen";
import { StatusBar } from "react-native";
const Stack = createNativeStackNavigator();
import { useColorScheme } from "react-native";

export default function App() {
  const colorScheme = useColorScheme();
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
