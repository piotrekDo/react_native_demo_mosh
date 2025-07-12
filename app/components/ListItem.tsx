import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

interface Props {
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
}

export const ListItem = ({ image, title, subTitle }: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
  },
  containerText: {
    marginLeft: 15,
    paddingVertical: 5,
    gap: 5
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subTitle: {
    color: colors.medium,
    fontWeight: 'bold'
  },
});
