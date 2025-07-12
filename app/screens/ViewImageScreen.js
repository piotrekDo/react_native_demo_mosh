import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialIcons style={styles.closeIcon} name='close' size={40} color='white' />
      <MaterialIcons style={styles.deleteIcon} name='delete' size={40} color='white' />
      <Image resizeMode='contain' style={styles.image} source={require('../assets/app-foto/chair.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
