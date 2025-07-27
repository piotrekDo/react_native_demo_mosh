import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  onPress: () => void;
}

export const NewListingsButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color={colors.white} size={40} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  container: {
    backgroundColor: colors.primary,
    borderColor: colors.white,
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
