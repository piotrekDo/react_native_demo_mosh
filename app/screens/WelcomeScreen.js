import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/app-foto/background.jpg')}
        style={[styles.image, { position: 'absolute' }]}
        resizeMode='cover'
      />
      <View
        style={{
          position: 'absolute',
          top: 100,
          left: '50%',
          transform: [{ translateX: '-50%' }],
          width: 200,
          height: 200,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../assets/app-foto/logo-red.png')}
          style={{ width: '80%', height: '80%' }}
          resizeMode='contain'
        />
        <Text style={{ marginTop: 20 }}>Sell What You Don't Need</Text>
      </View>

      <View style={{ backgroundColor: 'tomato', height: 70, width: '100%' }} />
      <View style={{ backgroundColor: 'dodgerblue', height: 70, width: '100%' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default WelcomeScreen;
