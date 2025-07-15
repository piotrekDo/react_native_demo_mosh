import React from 'react';
import { FlatList, View } from 'react-native';
import colors from '../config/colors';
import { ListItem } from './ListItem';
import { AppIcon } from './AppIcon';
import { ListItemSeparator } from './ListItemSeparator';

const manuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

export const UserAccountOptionsList = () => {
  return (
    <FlatList
      data={manuItems}
      keyExtractor={item => item.title}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          IconComponent={<AppIcon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
};
