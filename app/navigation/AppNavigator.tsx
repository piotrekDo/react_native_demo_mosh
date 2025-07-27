import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListingEditScreen } from '../screens/ListingEditScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NewListingsButton } from './NewListingsButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Tab.Navigator>
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={routes.LISTINGS_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => <NewListingsButton onPress={() => navigation.navigate(routes.LISTINGS_EDIT)} />,
          tabBarIcon: () => null, // ukrywamy ikonę, bo zastępuje ją przycisk
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account' color={color} size={size} />,
        }}
      />
    </Tab.Navigator>  
  </GestureHandlerRootView>
);

export default AppNavigator;
