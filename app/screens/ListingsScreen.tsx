import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ItemCard } from '../components/ItemCard';
import colors from '../config/colors';
import Constants from 'expo-constants';
import { ListItemSeparator } from '../components/ListItemSeparator';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/app-foto/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in grat condition',
    price: 1000,
    image: require('../assets/app-foto/couch.jpg'),
  },
];

export const ListingsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ItemCard title={item.title} subTitle={'$' + item.price} image={item.image} />}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: colors.light,
  },
});
