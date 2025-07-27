import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyAccountScreen } from '../screens/MyAccountScreen';
import { MessagesScreen } from '../screens/MessagesScreen';
import routes from './routes';


const Stack = createNativeStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen  name={routes.ACCOUNT} component={MyAccountScreen}/>
    <Stack.Screen  name={routes.MY_LISTINGS} component={MyAccountScreen}/>
    <Stack.Screen  name={routes.MY_MESSAGES} component={MessagesScreen}/>
  </Stack.Navigator>
);

export default AccountNavigator;