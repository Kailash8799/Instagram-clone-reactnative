import React, { useCallback, useState } from "react";
import {
    Text,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    ToastAndroid,
} from "react-native";
import CustomButton from "@/src/components/global/CustomButton";
import Input from "@/src/components/global/Input";
import { useAuth } from "@/src/services/state/auth";
import { Toast } from "@/src/utils/toast";
import { AuthService } from "@/src/services/api/authService";
import { useRouter } from "expo-router";
import { useThemeConstant } from "@/src/hooks/useThemeConstant";

const Forgot = () => {
    const [email, setemail] = useState("");
    const { isLoading, setIsLoading } = useAuth();
    const router = useRouter();
    const { commonTheme } = useThemeConstant();

    const onemailChange = (val: any) => {
        setemail(val);
    };

    const resetPassword = useCallback(async () => {
        if (isLoading) return;
        try {
            if (email.length === 0) {
                Toast.render("All field are mandatory");
                return;
            }
            if (email.length < 4) {
                Toast.render("Email is Invalid");
                return;
            }
            setIsLoading(true);
            const data = {
                email,
            };

            router.push({
                pathname: "/(public)/otpverification",
                params: { otp: "", email },
            });

            //   const res = await AuthService.resetpassword(data);
            //   if (res?.Success) {
            //     setemail("");
            //     Toast.render("OTP sent successfully");
            //     router.push({
            //       pathname: "/(public)/otpverification",
            //       params: { otp: res.Data?.OTP },
            //     });
            //   } else {
            //     Toast.render(res?.Message ?? "Some error occurred!");
            //   }
        } catch (error) {
            ToastAndroid.showWithGravity(
                "Some error occurred. Try again",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        } finally {
            setIsLoading(false);
        }
    }, [email]);

    return (
        <ScrollView
            style={[
                styles.container,
                { backgroundColor: commonTheme.background },
            ]}
        >
            <StatusBar />
            <View style={styles.statusbar} />
            <View>
                <Text style={[styles.heading1, { color: commonTheme.color }]}>
                    Forgot password?
                </Text>
                <Text
                    style={[
                        styles.heading2,
                        { color: commonTheme.secondaryColor },
                    ]}
                >
                    Enter your email address and we'll send you confirmation
                    code to reset your password.
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

            <View style={styles.spacer} />
            <View>
                <CustomButton
                    loading={isLoading}
                    title="Continue"
                    onClick={resetPassword}
                    borderRadius={100}
                />
            </View>

            <View style={styles.spacer} />
        </ScrollView>
    );
};

export default Forgot;

const styles = StyleSheet.create({
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
});
