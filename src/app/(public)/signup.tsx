import React, { useCallback, useState } from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { AuthService } from "@/src/services/api/authService";
import { RegisterFormType } from "@/src/types/auth";
import { Toast } from "@/src/utils/toast";
import Input from "@/src/components/global/Input";
import CustomButton from "@/src/components/global/CustomButton";
import { useAuth } from "@/src/services/state/auth";
import Icon from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useThemeConstant } from "@/src/hooks/useThemeConstant";

const Register = () => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isChecked, setisChecked] = useState(false);
  const [isSecured, setisSecured] = useState(true);
  const { isLoading, setIsLoading } = useAuth();
  const router = useRouter();
  const {commonTheme} = useThemeConstant();

  const onemailChange = (val: any) => {
    setemail(val);
  };
  const onpassChange = (val: any) => {
    setpassword(val);
  };
  const onusernameChange = (val: any) => {
    setusername(val);
  };

  const pushToLogin = () => {
    router.back();
  };

  const iconToggle = () => {
    setisSecured(!isSecured);
  };

  const registerUser = useCallback(async () => {
    if (isLoading) return;
    try {
      if (
        email.length === 0 ||
        password.length === 0 ||
        username.length === 0
      ) {
        Toast.render("All field are mandatory");
        return;
      }
      if (email.length < 4 || password.length < 4 || username.length < 4) {
        Toast.render(
          "Email and Password length should be more than 4 character"
        );
        return;
      }
      const data: RegisterFormType = {
        Email: email,
        Password: password,
        UserName: username,
        FirstName: "",
        LastName: "",
      };
      createUser(data);
    } catch (error) {
      Toast.render("Some error occurred. Try again");
    }
  }, []);

  const createUser = useCallback(async (data: RegisterFormType) => {
    try {
      if (!isChecked) {
        Toast.render("Agree term and conditions to continue");
        return;
      }
      setIsLoading(true);
      const res = await AuthService.register(data);
      if (res?.Success) {
        setemail("");
        setpassword("");
        Toast.render(res?.Message ?? "Account created successfully!");
      } else {
        Toast.render(res?.Message ?? "Some error occurred!");
      }
    } catch (error) {
      Toast.render("Some error occurred. Try again");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: commonTheme.background }]}
    >
      <StatusBar />
      <View style={styles.statusbar} />
      <View>
        <Text style={[styles.heading1, { color: commonTheme.color }]}>
          Create your new account.
        </Text>
        <Text style={[styles.heading2, { color: commonTheme.secondaryColor }]}>
          Create an account to start looking for the food you like
        </Text>
      </View>
      <View>
        <Text style={[styles.label, { color: commonTheme.color }]}>
          Email Address
        </Text>
        <Input
          isVisible={false}
          secureTextEntry={false}
          value={email}
          onChange={onemailChange}
          placeholder="Enter email"
        />
      </View>
      <View>
        <Text style={[styles.label, { color: commonTheme.color }]}>
          User Name
        </Text>
        <Input
          isVisible={false}
          secureTextEntry={false}
          value={username}
          onChange={onusernameChange}
          placeholder="Enter username"
        />
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
      </View>
      <View style={styles.termandc}>
        <View>
          <BouncyCheckbox
            size={23}
            fillColor={commonTheme.secondaryColor}
            unFillColor={commonTheme.background}
            iconStyle={{ borderColor: "black" }}
            innerIconStyle={{ borderWidth: 2 }}
            // textStyle={{ fontFamily: "JosefinSans-Regular" }}
            onPress={(checked: boolean) => {
              setisChecked(checked);
            }}
          />
        </View>
        <View style={[styles.tmcs]}>
          <Text style={[styles.tmc, { color: commonTheme.color }]}>
            I Agree with{" "}
          </Text>
          <TouchableOpacity>
            <Text style={styles.tmc}>Terms of Services </Text>
          </TouchableOpacity>
          <Text style={[styles.tmc, { color: commonTheme.color }]}>and</Text>
          <TouchableOpacity>
            <Text style={styles.tmc}> Privary Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.spacer} />
      <View>
        <CustomButton
          loading={isLoading}
          title="Register"
          onClick={registerUser}
          borderRadius={100}
        />
      </View>
      <View style={styles.account}>
        <View style={styles.line} />
        <View>
          <Text style={styles.heading3}>Or sign up with</Text>
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
        <Text style={styles.heading3}>Have an account?</Text>
        <TouchableOpacity onPress={pushToLogin}>
          <Text style={styles.forgot}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.spacer} />
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  tmcs: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  tmc: {
    color: "red",
    fontSize: 13,
    fontWeight: "600",
  },
  termandc: {
    display: "flex",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
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
    marginTop: 14,
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
