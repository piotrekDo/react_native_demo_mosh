import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import colors from '../config/colors';
interface Props {
  image?: ImageSourcePropType;
  IconComponent?: React.JSX.Element;
  title: string;
  subTitle?: string;
  showChevron?: boolean;
  onPress?: () => void;
  renderRightActions?: (progress: any, dragX: any) => React.ReactNode;
}

export const ListItem = ({
  image,
  IconComponent: ImageComponent,
  title,
  subTitle,
  showChevron = false,
  onPress,
  renderRightActions,
}: Props) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.containerCard}>
            {ImageComponent && ImageComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.containerText}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subTitle} numberOfLines={3}>
                {subTitle}
              </Text>
            </View>
          </View>
          {showChevron && (
            <View style={styles.containerChevron}>
              <Entypo name='chevron-right' size={24} color='black' />
            </View>
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  containerCard: {
    flex: 1,
    flexDirection: 'row',
  },
  containerChevron: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    marginLeft: 15,
    paddingVertical: 5,
    gap: 5,
    flex: 1,
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
