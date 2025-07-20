import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import colors from '../config/colors';
import { FormErrorMessage } from './FormErrorMessage';

interface Props<T> extends TextInputProps {
  name: keyof T;
}

export const AppTextFormInput = <T extends object>({ name, ...otherProps }: Props<T>) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext<T>();

  return (
    <>
      <TextInput
        style={styles.textInput}
        {...otherProps}
        onBlur={() => setFieldTouched(name as string)}
        onChangeText={handleChange(name as string)}
      />
      {touched[name] && errors[name] && <FormErrorMessage message={errors[name] as string} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  inputsContainer: {
    marginTop: 20,
    gap: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.light,
    width: '100%',
    gap: 10,
  },
  textInput: {
    fontSize: 25,
    width: '100%',
    fontWeight: 'bold',
    flex: 1,
  },
  loginButtonContainer: {
    marginTop: 50,
  },
});
