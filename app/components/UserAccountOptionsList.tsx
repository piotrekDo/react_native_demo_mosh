import React from 'react';
import { FlatList, View } from 'react-native';
import colors from '../config/colors';
import { ListItem } from './ListItem';
import { AppIcon } from './AppIcon';
import { ListItemSeparator } from './ListItemSeparator';
import { useNavigation } from '@react-navigation/native';

const manuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
    navigation: 'MyListings'
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    navigation: 'Messages'
  },
];

export const UserAccountOptionsList = () => {
    const navigation = useNavigation<any>()

  return (
    <FlatList
      data={manuItems}
      keyExtractor={item => item.title}
      renderItem={({ item }) => (
        <ListItem
        onPress={() => navigation.navigate(item.navigation)}
          title={item.title}
          IconComponent={<AppIcon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
};
