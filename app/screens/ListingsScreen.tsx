import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { ItemCard } from '../components/ItemCard';
import { SandyLoadingActivityIndicator } from '../components/SandyLoadingActivityIndicator';
import colors from '../config/colors';
import useListings from '../hooks/useListings';
import routes from '../navigation/routes';

export const ListingsScreen = () => {
  const { listings, error, isLoading, loadListings } = useListings();

  const navigator = useNavigation<any>();
  return (
    <View style={styles.container}>
      {error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <Button title='Try again' onPress={loadListings} />
        </>
      )}
      <SandyLoadingActivityIndicator visible={isLoading} />
      <FlatList
        data={listings}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ItemCard
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
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
