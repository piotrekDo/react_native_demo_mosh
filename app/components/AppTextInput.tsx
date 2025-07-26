import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../config/colors";
import { AppTextInputProps } from "./form/AppFormField";

export const AppTextInput = ({ icon, width = '100%', ...otherProps }: AppTextInputProps) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={{ flex: 1 }}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});
