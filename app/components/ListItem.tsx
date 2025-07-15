import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

interface Props {
  image?: ImageSourcePropType;
  IconComponent?: React.JSX.Element;
  title: string;
  subTitle?: string;
  onPress?: () => void;
  renderRightActions?: (progress: any, dragX: any) => React.ReactNode;
}

export const ListItem = ({ image, IconComponent: ImageComponent, title, subTitle, onPress, renderRightActions }: Props) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent && ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.containerText}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: colors.white
  },
  containerText: {
    marginLeft: 15,
    paddingVertical: 5,
    gap: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.medium,
    fontWeight: 'bold',
  },
});
