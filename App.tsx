import { View } from 'react-native';
import { ItemCard } from './app/components/ItemCard';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { ListingDetailsScreen } from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { MessagesScreen } from './app/screens/MessagesScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <View style={{ padding: 20, width: '100%', flex: 1, backgroundColor: '#f8f4f4' }}>
        {/* <ItemCard title='Red jacket for sale!' subTitle='$100' image={require('./app/assets/app-foto/jacket.jpg')} />
      <WelcomeScreen />
      <ListingDetailsScreen />
      <ViewImageScreen /> */}
        <MessagesScreen />
      </View>
    </GestureHandlerRootView>
  );
}
