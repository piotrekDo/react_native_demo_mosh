import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} />
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
    <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
