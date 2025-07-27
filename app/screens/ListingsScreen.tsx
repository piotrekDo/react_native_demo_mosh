import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import React from 'react';
import { FlatList, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { ItemCard } from '../components/ItemCard';
import colors from '../config/colors';
import routes from '../navigation/routes';

export interface ListingItem {
  id: number;
  title: string;
  price: number;
  image: ImageSourcePropType;
}

const listings: ListingItem[] = [
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
  const navigator = useNavigation<any>();
  return (
    <View style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ItemCard
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
            onPress={() => navigator.navigate(routes.LISTINGS_DETAILS, item)}
          />
        )}
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
