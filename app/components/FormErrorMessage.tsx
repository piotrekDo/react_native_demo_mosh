import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
  message: string;
}

export const FormErrorMessage = ({ message }: Props) => {
  if (!message) return null;

  return <Text style={styles.text}>{message}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'red'
  },
});
