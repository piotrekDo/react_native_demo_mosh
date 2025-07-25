import { useFormikContext } from 'formik';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../../config/colors';

interface Props {
  title: string;
}

export const SubmitButton = ({ title }: Props) => {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={() => handleSubmit()}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
