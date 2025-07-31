import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './app/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import useAuthStore from './app/auth/useAuthState';
import useAuth from './app/auth/useAuth';

export default function App() {
  const { user } = useAuth();
  return (
    <NavigationContainer theme={navigationTheme}>
      {!user && <AuthNavigator />}
      {user && <AppNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: 'white',
  },
});
