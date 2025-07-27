import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';

interface Props {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
  onPress: () => void;
}

export const ItemCard = ({ title, subTitle, image, onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} resizeMode='cover' />
        <View style={styles.containerText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 30,
    overflow: 'hidden',
  },
  containerText: {
    padding: 20,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 5,
  },
  image: {
    height: 200,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.secondary,
  },
});
