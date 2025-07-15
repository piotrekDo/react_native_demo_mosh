import React from 'react';
import { Image, ImageSourcePropType, Text, View, StyleSheet } from 'react-native';
import colors from '../config/colors';

interface Props {
  fullName: string;
  email: string;
  image: ImageSourcePropType;
}

export const UserCard = ({ fullName, email, image }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode='cover' />
      <View style={styles.containerText}>
        <Text style={styles.title}>{fullName}</Text>
        <Text style={styles.subTitle}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,

  },
  containerText: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 5,
  },
  image: {
    borderRadius: `50%`,
    height: 80,
    width: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
  },
  subTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.medium,
  },
});
