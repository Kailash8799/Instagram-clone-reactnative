import { useColorScheme } from "@/src/hooks/useColorScheme";

export function useThemeConstant() {
    const colorScheme = useColorScheme()
    const lightTheme = {
        color: "#000",
    };
    const darkTheme = {
        color: '#fff'
    };
    const commonTheme = colorScheme === "dark" ? darkTheme : lightTheme;
    return { commonTheme };
};
