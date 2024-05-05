import { useColorScheme } from "@/src/hooks/useColorScheme";

export function useThemeConstant() {
    const colorScheme = useColorScheme()
    const lightTheme = {
        color: "#000",
        background: '#fff'
    };
    const darkTheme = {
        color: '#fff',
        background: '#000'
    };
    const commonTheme = colorScheme === "dark" ? darkTheme : lightTheme;
    return { commonTheme };
};
