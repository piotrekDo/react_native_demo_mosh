import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import colors from '../config/colors';

interface Props {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  placeholder: string;
}

export const AppTextInput = ({ icon, placeholder }: Props) => {
  return (
    <View style={styles.constainer}>
      {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={40}/>}
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
});
