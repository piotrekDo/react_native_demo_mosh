import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './app/navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NetInfo, { useNetInfo } from '@react-native-community/netinfo';

declare global {
  // Dodajemy deklarację nowej metody na globalu
  var showAsyncStorageContent: (() => Promise<void>) | undefined;
}

export default function App() {
  const netinfo = useNetInfo();

  const demo = async () => {
    try {
      await AsyncStorage.setItem('person', JSON.stringify({ id: 1, name: 'Random' }));
      const value = await AsyncStorage.getItem('person');
      const person = JSON.parse(value!)
    } catch (error) {
      console.log(error);
    }
  };

global.showAsyncStorageContent = async () => {
  const keys = await AsyncStorage.getAllKeys();
  const stores = await AsyncStorage.multiGet(keys);
  console.log(stores);
};

  return (
    <View style={styles.container}>
      <Text>{netinfo.details?.isConnectionExpensive}</Text>
      <Text>{netinfo.type}</Text>
      <Text>{netinfo.isConnected}</Text>
    </View>
    // <NavigationContainer theme={navigationTheme}>
    //   <AppNavigator />
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: 'white',
  },
});
