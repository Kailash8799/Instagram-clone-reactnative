import React, { useCallback, useState } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { tokenCache } from "@/src/utils/token";
import { Toast } from "@/src/utils/toast";
import { AuthService } from "@/src/services/api/authService";
import Input from "@/src/components/global/Input";
import CustomButton from "@/src/components/global/CustomButton";
import { LoginFormType } from "@/src/types/auth";
import { useAuth } from "@/src/services/state/auth";
import { useRouter } from "expo-router";
import Icon from "@expo/vector-icons/AntDesign";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isSecured, setisSecured] = useState(true);
  const { isLoading, setIsLoading, setIsSignIn } = useAuth();
  const router = useRouter();

  const onemailChange = (val: any) => {
    setemail(val);
  };
  const onpassChange = (val: any) => {
    setpassword(val);
  };

  const pushToRegister = () => {
    router.push("/(public)/signup");
  };
  const pushToForgot = () => {
    router.push("forgot");
  };

  const loginUser = useCallback(async (data: LoginFormType) => {
    setIsLoading(true);
    try {
      setIsSignIn(true);
      return;
      const res = await AuthService.login(data);
      if (res?.Success) {
        setemail("");
        setpassword("");
        await tokenCache.saveToken("logintoken", res?.Data?.token);
        setIsSignIn(true);
      } else {
        Toast.render(res?.Message ?? "Some error occurred!");
      }
    } catch (error) {
      Toast.render("Some error occurred. Try again");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const pushToHome = useCallback(async () => {
    if (isLoading) return;
    try {
      if (email.length === 0 || password.length === 0) {
        Toast.render("All field are mandatory");
        return;
      }
      if (email.length < 4 || password.length < 4) {
        Toast.render(
          "Email and Password length should be more than 4 character"
        );
        return;
      }
      const data: LoginFormType = {
        UserName: email,
        Password: password,
      };
      loginUser(data);
    } catch (error) {
      Toast.render("Some error occurred. Try again");
    }
  }, [email, password]);

  const iconToggle = useCallback(() => {
    setisSecured(!isSecured);
  }, [isSecured]);

  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <View style={styles.statusbar} />
      <View>
        <Text style={[styles.heading1]}>Login to your account.</Text>
        <Text style={[styles.heading2]}>Please sign in to your account</Text>
      </View>
      <View>
        <Text style={styles.label}>Email Address</Text>
        <Input
          isVisible={false}
          secureTextEntry={false}
          value={email}
          onChange={onemailChange}
          placeholder="Enter email"
        />
      </View>
      <View>
        <Text style={styles.label}>Password</Text>
        <Input
          isVisible={true}
          secureTextEntry={isSecured}
          onToggle={iconToggle}
          iconvalue={isSecured}
          value={password}
          onChange={onpassChange}
          placeholder="Password"
        />
      </View>
      <View style={styles.forgotview}>
        <TouchableOpacity onPress={pushToForgot}>
          <Text style={styles.forgot}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer} />
      <View>
        <CustomButton
          loading={isLoading}
          title="Sign in"
          onClick={pushToHome}
          borderRadius={100}
        />
      </View>
      <View style={styles.account}>
        <View style={styles.line} />
        <View>
          <Text style={styles.heading3}>Or sign in with</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.circleparent}>
        <View style={styles.circle}>
          <TouchableOpacity
            // onPress={signInWithGoogle}
            style={styles.centerbutton}
          >
            <Icon name="google" size={30} color={"red"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.account}>
        <Text style={styles.heading3}>Don't have an account?</Text>
        <TouchableOpacity onPress={pushToRegister}>
          <Text style={styles.forgot}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.spacer} />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  circleparent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  circle: {
    height: 50,
    width: 50,
    borderColor: "rgba(88,88,88,0.1)",
    borderWidth: 2,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  centerbutton: {
    height: 45,
    width: 45,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  line: {
    height: 1,
    borderRadius: 100,
    width: 150,
    backgroundColor: "rgba(88,88,88,0.2)",
  },
  space: { width: 5 },
  heading3: {
    color: "grey",
    fontSize: 15,
    marginHorizontal: 5,
    fontWeight: "500",
  },
  spacer: {
    height: 35,
  },
  forgotview: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  account: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    alignItems: "center",
  },
  forgot: {
    color: "rgba(255,159,11,1)",
    fontSize: 15,
    fontWeight: "600",
  },
  label: {
    color: "black",
    marginTop: 30,
    marginBottom: 5,
    fontSize: 17,
    fontWeight: "600",
  },
  heading1: {
    color: "black",
    fontSize: 35,
    fontWeight: "900",
  },
  heading2: {
    color: "grey",
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
    backgroundColor: "#fff",
  },
});
