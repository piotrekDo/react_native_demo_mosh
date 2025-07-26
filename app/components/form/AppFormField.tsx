import { useFormikContext } from "formik";
import React from "react";
import { AppTextInput } from "../AppTextInput";
import { ErrorMessage } from "./ErrorMessage";
import { DimensionValue, TextInputProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface AppTextInputProps extends TextInputProps {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  width?: DimensionValue;
}

interface Props<T> extends AppTextInputProps {
  name: keyof T;
}

export const AppFormField = <T extends object>({ name, width, ...otherProps }: Props<T>) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext<T>();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name as string)}
        onChangeText={handleChange(name as string)}
        width={width}
        {...otherProps}
      />
      {touched[name] && typeof errors[name] === "string" && (
        <ErrorMessage message={errors[name] as string} />
      )}
    </>
  );
};
