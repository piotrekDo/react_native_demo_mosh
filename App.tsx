import { StyleSheet } from 'react-native';
import AuthNavigator from './app/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';


export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
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
