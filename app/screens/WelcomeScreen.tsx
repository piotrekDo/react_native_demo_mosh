import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import LoginButton from '../components/LoginButton';
import { RegisterButton } from '../components/RegisterButton';

function WelcomeScreen() {
  return (
    <View style={styles.containerMain}>
      <Image
        source={require('../assets/app-foto/background.jpg')}
        style={[styles.image, { position: 'absolute' }]}
        resizeMode='cover'
        blurRadius={10}
      />
      <View style={styles.containerLogo}>
        <Image
          source={require('../assets/app-foto/logo-red.png')}
          style={{ width: '80%', height: '80%' }}
          resizeMode='contain'
        />
        <Text style={styles.header}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.containerButtons}>
        <LoginButton />
        <RegisterButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  containerLogo: {
    marginTop: 50,
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButtons: {
    width: '100%',
    gap: 20,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  header: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
