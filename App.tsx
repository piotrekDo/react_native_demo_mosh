import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LoginScreen } from './app/screens/LoginScreen';
import { RegisterScreen } from './app/screens/RegisterScreen';
import { ListingEditScreen } from './app/screens/ListingEditScreen';

export default function App() {
  return (
    <GestureHandlerRootView>
      <ListingEditScreen />
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
