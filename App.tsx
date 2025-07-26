import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
    padding: 50,
    flex: 1,
    backgroundColor: 'white',
  },
});
