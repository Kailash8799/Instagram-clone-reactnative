import { ToastAndroid } from "react-native";

class Toast {
    static render = (message: string) => {
        ToastAndroid.showWithGravity(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }
}

export { Toast }