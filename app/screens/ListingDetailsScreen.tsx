import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ListItem } from '../components/ListItem';
import colors from '../config/colors';
import { ListingItem } from './ListingsScreen';

export const ListingDetailsScreen = () => {
  const route = useRoute<any>();
  const listing: ListingItem = route.params;
  return (
    <View style={styles.container}>
      <Image resizeMode='cover' style={styles.image} source={listing.image} />
      <View style={styles.containerText}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subTitle}>{listing.price}</Text>
      </View>
      <ListItem
        image={require('../assets/app-foto/mosh.jpg')}
        title='Mosh Hamedani'
        subTitle='5 Listings'
        onPress={() => {}}
      />
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
