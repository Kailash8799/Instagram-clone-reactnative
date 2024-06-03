import {
    Text,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Dimensions,
    ToastAndroid,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import Icon from "@expo/vector-icons/Ionicons";
import Clock from "@expo/vector-icons/Feather";
import CustomButton from "@/src/components/global/CustomButton";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Toast } from "@/src/utils/toast";
import { useAuth } from "@/src/services/state/auth";
import { useThemeConstant } from "@/src/hooks/useThemeConstant";

const { width } = Dimensions.get("screen");

const OTPVerification = () => {
    const params = useLocalSearchParams();
    const { otp, email } = params;
    const { isLoading, setIsLoading } = useAuth();
    const router = useRouter();

    const ref1 = useRef<TextInput | null>(null);
    const ref2 = useRef<TextInput | null>(null);
    const ref3 = useRef<TextInput | null>(null);
    const ref4 = useRef<TextInput | null>(null);
    const [f1, setf1] = useState<string>("");
    const [f2, setf2] = useState<string>("");
    const [f3, setf3] = useState<string>("");
    const [f4, setf4] = useState<string>("");
    const [resendOTP, setresendOTP] = useState<string | null>(null);
    const [timer, settimer] = useState(0);
    const [timerison, settimeison] = useState(false);

    const { commonTheme } = useThemeConstant();

    const goBack = () => {
        router.back();
    };

    const verifyOTP = () => {
        if (
            f1.toString() === "" ||
            f2.toString() === "" ||
            f3.toString() === "" ||
            f4.toString() === ""
        ) {
            Toast.render("Invalid OTP");
            return;
        }
        const userOTP =
            f1.toString() + f2.toString() + f3.toString() + f4.toString();
        // if (userOTP !== otp && !(resendOTP !== null && resendOTP === userOTP)) {
        //   ToastAndroid.showWithGravity(
        //     "Invalid OTP",
        //     ToastAndroid.SHORT,
        //     ToastAndroid.CENTER
        //   );
        //   return;
        // }
        router.push({ pathname: "resetpassword", params: { email } });
    };

    const resendCodeOTP = async () => {
        try {
            if (email?.length === 0) {
                ToastAndroid.showWithGravity(
                    "Failed to resend",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                );
                return;
            }

            setIsLoading(true);
            const data = {
                email,
            };
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
            Toast.render("Some error occurred. Try again");
        } finally {
            setIsLoading(false);
        }
    };

    const resendCode = useCallback(() => {
        if (timerison || isLoading) {
            return;
        }
        resendCodeOTP();
        settimer(120);
        const interval = setInterval(() => {
            settimer((tm) => {
                if (tm === 0) {
                    clearInterval(interval);
                    settimeison(false);
                    return 0;
                }
                return tm - 1;
            });
        }, 1000);
        settimeison(true);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.header]}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={goBack}
                    style={styles.backarrow}
                >
                    <View>
                        <Icon
                            name="chevron-back"
                            color={commonTheme.icon}
                            size={30}
                        />
                    </View>
                </TouchableOpacity>
                <Text
                    style={[styles.headertitle, { color: commonTheme.color }]}
                >
                    OTP
                </Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.statusbar} />
                <View>
                    <Text
                        style={[styles.heading1, { color: commonTheme.color }]}
                    >
                        Email Verification
                    </Text>
                    <Text
                        style={[
                            styles.heading2,
                            { color: commonTheme.secondaryColor },
                        ]}
                    >
                        Enter the verification code we send you on: {email}
                    </Text>
                </View>

                <View style={styles.otp}>
                    <TextInput
                        ref={ref1}
                        value={f1}
                        inputMode="numeric"
                        keyboardType="number-pad"
                        style={[styles.textinput, { color: commonTheme.color }]}
                        maxLength={1}
                        onChangeText={(txt) => {
                            setf1(txt);
                            if (txt.length > 0) {
                                ref2.current?.focus();
                            } else {
                                ref1.current?.focus();
                            }
                        }}
                    />
                    <TextInput
                        ref={ref2}
                        value={f2}
                        inputMode="numeric"
                        keyboardType="number-pad"
                        style={[styles.textinput, { color: commonTheme.color }]}
                        maxLength={1}
                        onChangeText={(txt) => {
                            setf2(txt);
                            if (txt.length > 0) {
                                ref3.current?.focus();
                            } else {
                                ref1.current?.focus();
                            }
                        }}
                    />
                    <TextInput
                        ref={ref3}
                        value={f3}
                        inputMode="numeric"
                        keyboardType="number-pad"
                        style={[styles.textinput, { color: commonTheme.color }]}
                        maxLength={1}
                        onChangeText={(txt) => {
                            setf3(txt);
                            if (txt.length > 0) {
                                ref4.current?.focus();
                            } else {
                                ref2.current?.focus();
                            }
                        }}
                    />
                    <TextInput
                        ref={ref4}
                        value={f4}
                        inputMode="numeric"
                        keyboardType="number-pad"
                        style={[styles.textinput, { color: commonTheme.color }]}
                        maxLength={1}
                        onChangeText={(txt) => {
                            setf4(txt);
                            if (txt.length > 0) {
                                ref4.current?.focus();
                            } else {
                                ref3.current?.focus();
                            }
                        }}
                    />
                </View>

                <View style={styles.spacer} />
                <View style={styles.account}>
                    <Text style={styles.heading3}>Don't receive?</Text>
                    <TouchableOpacity disabled={timerison} onPress={resendCode}>
                        <Text style={styles.resend}>Resend</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 10 }} />
                <View style={styles.account}>
                    <Clock name="clock" size={18} color={"grey"} />
                    <Text style={styles.heading3}>{timer}s</Text>
                </View>
                <View style={styles.spacer} />
                <View>
                    <CustomButton
                        title="Continue"
                        loading={isLoading}
                        onClick={verifyOTP}
                        borderRadius={100}
                    />
                </View>
                <View style={styles.spacer} />
            </ScrollView>
        </View>
    );
};

export default OTPVerification;

const styles = StyleSheet.create({
    otp: {
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 40,
    },
    textinput: {
        borderWidth: 2,
        borderRadius: 10,
        width: 50,
        height: 50,
        color: "black",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: "auto",
        textAlign: "center",
        fontSize: 17,
        fontWeight: "700",
        borderColor: "rgba(88,88,88,0.2)",
        marginLeft: 5,
    },
    btnstyle: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.2,
        width: 100,
        paddingVertical: 7,
        borderRadius: 6,
    },
    btnstylevery: {
        justifyContent: "center",
        alignItems: "center",
        width: 240,
        paddingVertical: 9,
        borderRadius: 6,
    },
    resend: {
        color: "rgba(255,159,11,1)",
        fontSize: 15,
        fontWeight: "600",
    },
    heading3: {
        color: "grey",
        fontSize: 15,
        marginHorizontal: 5,
        fontWeight: "500",
    },
    account: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
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
    containerbtn: {
        backgroundColor: "rgba(255,159,11,1)",
        width: "100%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
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
        height: 40,
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
