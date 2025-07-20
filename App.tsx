import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LoginScreen } from './app/screens/LoginScreen';

export default function App() {
  return (
    <GestureHandlerRootView>
      <LoginScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
