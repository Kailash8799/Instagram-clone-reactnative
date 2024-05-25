import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Ionicons";
import Input from "@/src/components/global/Input";
import CustomButton from "@/src/components/global/CustomButton";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { Toast } from "@/src/utils/toast";
import { useAuth } from "@/src/services/state/auth";
import { useThemeConstant } from "@/src/hooks/useThemeConstant";

const { width } = Dimensions.get("screen");

const Forgot = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const email = params?.email;
  const { isLoading, setIsLoading } = useAuth();
  const { commonTheme } = useThemeConstant();

  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [isSecured, setisSecured] = useState(true);

  const onpassChange = (val: any) => {
    setpassword(val);
  };
  const oncpassChange = (val: any) => {
    setcpassword(val);
  };

  const pushToLogin = () => {
    navigation.reset({
      index: 0,
      //@ts-ignore // i need to fix this error later
      routes: [{ name: "login", key: "login" }],
    });
  };

  const iconToggle = () => {
    setisSecured(!isSecured);
  };

  const changePassword = async () => {
    try {
      if (
        email?.length === 0 ||
        password.length === 0 ||
        cpassword.length === 0
      ) {
        Toast.render("All field are mandatory");
        return;
      }
      if (password.length < 4 || cpassword.length < 4) {
        Toast.render("Password length should be more than 4 character");
        return;
      }
      if (password !== cpassword) {
        Toast.render("Password ans confirm password not match");
        return;
      }
      setIsLoading(true);
      const data = {
        email,
        password,
      };
      pushToLogin();
    } catch (error) {
      Toast.render("Some error occurred. Try again");
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={goBack}
          style={styles.backarrow}
        >
          <View>
            <Icon name="chevron-back" color={commonTheme.icon} size={30} />
          </View>
        </TouchableOpacity>
        <Text style={[styles.headertitle, { color: commonTheme.color }]}>
          Reset Password
        </Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.statusbar} />
        <View>
          <Text style={[styles.heading1, { color: commonTheme.color }]}>
            Reset Password
          </Text>
          <Text
            style={[styles.heading2, { color: commonTheme.secondaryColor }]}
          >
            Your new password must be diffrent from the previously used password
          </Text>
        </View>

        <View>
          <Text style={[styles.label, { color: commonTheme.color }]}>
            Password
          </Text>
          <Input
            isVisible={true}
            iconvalue={isSecured}
            onToggle={iconToggle}
            secureTextEntry={isSecured}
            value={password}
            onChange={onpassChange}
            placeholder="Password"
          />
          <Text
            style={[styles.labelbelow, { color: commonTheme.secondaryColor }]}
          >
            Must be at least 8 character
          </Text>
        </View>
        <View>
          <Text style={[styles.label, { color: commonTheme.color }]}>
            Confirm Password
          </Text>
          <Input
            isVisible={true}
            iconvalue={isSecured}
            onToggle={iconToggle}
            secureTextEntry={isSecured}
            value={cpassword}
            onChange={oncpassChange}
            placeholder="Confirm Password"
          />
          <Text style={[styles.labelbelow, { color: commonTheme.secondaryColor }]}>
            Both password must match
          </Text>
        </View>

        <View style={styles.spacer} />
        <View>
          <CustomButton
            loading={isLoading}
            title="Verify Account"
            onClick={changePassword}
            borderRadius={100}
          />
        </View>
        <View style={styles.spacer} />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Forgot;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 10,
    position: "relative",
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  backarrow: {
    zIndex: 100,
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(88,88,88,0.1)",
  },
  headertitle: {
    zIndex: 10,
    fontSize: 25,
    fontWeight: "600",
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
  },
  button: {
    paddingVertical: 11,
  },
  text: {
    fontSize: 22,
    fontWeight: "500",
  },
  labelbelow: {
    marginLeft: 4,
    fontWeight: "500",
  },
  spacer: {
    height: 100,
  },

  label: {
    marginTop: 30,
    marginBottom: 5,
    fontSize: 17,
    fontWeight: "600",
  },
  heading1: {
    fontSize: 35,
    fontWeight: "900",
  },
  heading2: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "500",
  },
  statusbar: {
    height: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
