import React from 'react';
import Constants from 'expo-constants';

import { View, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { UserCard } from '../components/UserCard';
import { UserAccountOptionsList } from '../components/UserAccountOptionsList';
import { AppIcon } from '../components/AppIcon';
import { ListItem } from '../components/ListItem';

export const MyAccountScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userCardContainer}>
        <UserCard fullName='Mosh Hamedani' email='some@mail.com' image={require('../assets/app-foto/mosh.jpg')} />
      </View>
      <View style={styles.userOptionsContainer}>
        <UserAccountOptionsList />
      </View>
      <View style={styles.userOptionsContainer}>
        <ListItem title='Log Out' IconComponent={<AppIcon name='logout' backgroundColor='#ffe66d'/>}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.light,
  },
  userCardContainer: {
    marginTop: 20,
  },
  userOptionsContainer: {
    marginTop: 50,
  },
});
