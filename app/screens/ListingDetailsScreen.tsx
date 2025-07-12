import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import { ListItem } from '../components/ListItem';

export const ListingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode='cover' style={styles.image} source={require('../assets/app-foto/jacket.jpg')} />
      <View style={styles.containerText}>
        <Text style={styles.title}>Red jacket for sale!</Text>
        <Text style={styles.subTitle}>$100</Text>
      </View>
      <ListItem image={require('../assets/app-foto/mosh.jpg')} title='Mosh Hamedani' subTitle='5 Listings'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: 300,
  },
  containerText: {
    padding: 20,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
  },
});
