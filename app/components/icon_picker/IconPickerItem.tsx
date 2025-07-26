import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  bgColor: string;
  text: string;
}

export const IconPickerItem = ({ icon, bgColor, text }: Props) => {
  return (
    <View style={styles.pickerItem}>
      <View style={[styles.pickerItemIcon, { backgroundColor: bgColor }]}>
        <MaterialCommunityIcons name={icon} size={50} color='white' />
      </View>
      <Text style={styles.pickerItemText}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  pickerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerItemText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  pickerItemIcon: {
    backgroundColor: '#fc5c65',
    width: 100,
    height: 100,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
