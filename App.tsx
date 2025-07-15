import { View } from 'react-native';
import { ItemCard } from './app/components/ItemCard';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { ListingDetailsScreen } from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { MessagesScreen } from './app/screens/MessagesScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MyAccountScreen } from './app/screens/MyAccountScreen';
import colors from './app/config/colors';
import { ListingsScreen } from './app/screens/ListingsScreen';

export default function App() {
  return (
    <GestureHandlerRootView>
        {/* <ItemCard title='Red jacket for sale!' subTitle='$100' image={require('./app/assets/app-foto/jacket.jpg')} />
      <WelcomeScreen />
      <ListingDetailsScreen />
      <ViewImageScreen /> */}
        <ListingsScreen />
    </GestureHandlerRootView>
  );
}
