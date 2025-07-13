import React from 'react';
import { GestureResponderEvent, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../config/colors';
import EvilIcons from '@expo/vector-icons/EvilIcons';

interface Props {
    onPress: (event: GestureResponderEvent) => void;
}

export const ListItemDeleteAction = ({onPress}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <EvilIcons name='trash' size={50} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
