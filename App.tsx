import { View } from 'react-native';
import { ItemCard } from './app/components/ItemCard';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { ListingDetailsScreen } from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return (
    // <View style={{padding: 20 ,flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: '#f8f4f4'}}>
    //   <ItemCard title='Red jacket for sale!' subTitle='$100' image={require('./app/assets/app-foto/jacket.jpg')} />
    // </View>
    // <WelcomeScreen />
    // <ListingDetailsScreen />
    <ViewImageScreen />
  );
}
