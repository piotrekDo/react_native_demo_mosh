import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, TouchableHighlight, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient
      colors={['rgba(30,30,60,0.95)', 'rgba(10,10,20,1)']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar style='light' />
      <SafeAreaView style={styles.container}>
        <TouchableHighlight>
          <Text numberOfLines={1} style={{ color: '#fff', fontSize: 24 }}>
            Hello, World! a very very long text to see what happens when its too long!
          </Text>
        </TouchableHighlight>
        <Image source={require('./assets/icon.png')} style={{ width: 200, height: 200 }} />
        <TouchableOpacity>
          <Image source={{ uri: 'https://picsum.photos/id/237/200/300' }} style={{ width: 200, height: 300 }} />
        </TouchableOpacity>

        <Button title="Press Me" onPress={() => alert('Button Pressed!')} />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#6200ee',
    padding: 10,
}});
