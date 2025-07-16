import { View, StyleSheet, TextInput, SafeAreaView, Text } from 'react-native';
import { ItemCard } from './app/components/ItemCard';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { ListingDetailsScreen } from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { MessagesScreen } from './app/screens/MessagesScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MyAccountScreen } from './app/screens/MyAccountScreen';
import colors from './app/config/colors';
import { ListingsScreen } from './app/screens/ListingsScreen';
import { useState } from 'react';
import { AppDropdownPicker } from './app/components/AppDropdownPicker';
import { ModalAppDropdownPicker } from './app/components/ModalAppDropdownPicker';


export default function App() {
  const [input, setInput] = useState('');
  return (
    <GestureHandlerRootView>
      {/* <ItemCard title='Red jacket for sale!' subTitle='$100' image={require('./app/assets/app-foto/jacket.jpg')} />
      <WelcomeScreen />
      <ListingDetailsScreen />
      <ViewImageScreen /> */}
      {/* <ListingsScreen /> */}
      <View style={styles.container}>
        <SafeAreaView>
          <Text>{input}</Text>
          <TextInput clearButtonMode='while-editing' secureTextEntry={true} keyboardType='numeric' style={styles.input} placeholder='inpucik' onChangeText={input => setInput(input)}/>
        </SafeAreaView>
        <ModalAppDropdownPicker
  items={[
    { label: 'JavaScript', value: 'js' },
    { label: 'Python', value: 'py' },
    { label: 'Java', value: 'java' },
  ]}
  placeholder="Wybierz język"
  onSelect={(value) => console.log('Wybrano:', value)}
/>
      </View>
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
