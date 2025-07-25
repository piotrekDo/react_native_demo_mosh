import { StyleSheet, Text } from 'react-native';

interface Props {
  message: string;
}
export const ErrorMessage = ({ message }: Props) => {
  return <Text style={styles.error}>{message}</Text>;
};

const styles = StyleSheet.create({
  error: { color: 'red' },
});
