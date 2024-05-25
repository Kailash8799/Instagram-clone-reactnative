import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Feather";
import { useThemeConstant } from "@/src/hooks/useThemeConstant";

const Input = ({
  onChange,
  value,
  onToggle,
  isVisible,
  iconvalue,
  placeholder,
  secureTextEntry,
}: {
  isVisible: boolean;
  onChange: (e: any) => void;
  value: string;
  onToggle?: () => void;
  iconvalue?: boolean;
  placeholder: string;
  secureTextEntry: boolean;
}) => {
  const { commonTheme } = useThemeConstant();

  return (
    <View style={[styles.input, { borderColor: commonTheme.borderColor }]}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholderTextColor={"grey"}
        placeholder={placeholder}
        style={[styles.inputtext, { color: commonTheme.color }]}
        onChangeText={onChange}
        value={value}
      />
      {isVisible && (
        <TouchableOpacity onPress={onToggle}>
          {iconvalue ? (
            <View style={styles.marginRight}>
              <Icon name="eye-off" color={commonTheme.icon} size={25} />
            </View>
          ) : (
            <View style={styles.marginRight}>
              <Icon name="eye" color={commonTheme.icon} size={25} />
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  marginRight: {
    marginRight: 10,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputtext: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
  },
});
