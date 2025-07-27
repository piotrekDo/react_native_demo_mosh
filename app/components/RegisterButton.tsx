import * as Haptics from 'expo-haptics';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import routes from '../navigation/routes';

export const RegisterButton = () => {
  const navigation = useNavigation<any>();

  const handleButtonPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate(routes.REGISTER);
  };

  return (
    <TouchableOpacity onPress={handleButtonPress}>
      <View style={style.containter}>
        <Text style={style.text}>REGISTER</Text>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  containter: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colors.secondary,
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
