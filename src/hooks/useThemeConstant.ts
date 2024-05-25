import { useColorScheme } from "@/src/hooks/useColorScheme";

export function useThemeConstant() {
    const colorScheme = useColorScheme()
    const lightTheme = {
        color: "#000",
        secondaryColor: "grey",
        background: '#fff',
        borderColor: "rgba(88,88,88,0.1)",
        icon: "black",
    };
    const darkTheme = {
        color: '#fff',
        secondaryColor: "grey",
        background: '#000',
        borderColor: "rgba(88,88,88,0.4)",
        icon: "white",
    };
    const commonTheme = colorScheme === "dark" ? darkTheme : lightTheme;
    return { commonTheme };
};
