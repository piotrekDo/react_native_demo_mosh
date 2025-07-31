import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import React from 'react';
import { Image, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import * as Yup from 'yup';
import { AppTextFormInput } from '../components/AppTextFormInput';
import LoginButton from '../components/LoginButton';
import colors from '../config/colors';
import login from '../api/auth';
import { jwtDecode } from 'jwt-decode';
import useAuthStore from '../auth/useAuthState';
import useAuth from '../auth/useAuth';

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export const LoginScreen = () => {
  const {logIn} = useAuth();
  
  const sendRequest = async (email: string, password: string) => {
    const result = await login(email, password);
    if (result.data) {
      logIn(result.data)
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/app-foto/logo-red.png')} />

        <Formik<FormValues>
          initialValues={{ email: '', password: '' }}
          onSubmit={values => sendRequest(values.email, values.password)}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <>
              <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                  <MaterialIcons name='mail' size={40} color={colors.medium} />
                  <AppTextFormInput<FormValues>
                    name='email'
                    placeholder='login'
                    autoCapitalize='none'
                    textContentType='username'
                    keyboardType='email-address'
                  />
                </View>

                <View style={styles.inputContainer}>
                  <FontAwesome5 name='unlock-alt' size={40} color={colors.medium} />
                  <AppTextFormInput<FormValues>
                    name='password'
                    placeholder='password'
                    autoCapitalize='none'
                    textContentType='password'
                    secureTextEntry
                  />
                </View>
              </View>

              <View style={styles.loginButtonContainer}>
                <LoginButton onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
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
