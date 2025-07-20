import * as Haptics from 'expo-haptics';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

type Props = {
  onPress?: () => void;
};

export default function LoginButton({ onPress }: Props) {
  const handleButtonPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress && onPress();
  };
  return (
    <TouchableOpacity onPress={handleButtonPress}>
      <View style={style.containter}>
        <Text style={style.text}>LOGIN</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  containter: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colors.primary,
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
