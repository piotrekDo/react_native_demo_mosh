import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

interface Props {
  visible: boolean;
}

export const SandyLoadingActivityIndicator = ({ visible = false }: Props) => {
  if (!visible) return null;
  return <LottieView autoPlay loop style={styles.loader} source={require('../assets/animation/sandy_loading.json')} />;
};

const styles = StyleSheet.create({
  loader: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
});
