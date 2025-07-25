import { Formik, FormikHelpers, FormikValues } from 'formik';
import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import colors from '../../config/colors';

interface Props<T extends FormikValues> {
  initialValues: T;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
  validationSchema?: Yup.ObjectSchema<any>;
  children: ReactNode;
}

export function AppForm<T extends FormikValues>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: Props<T>) {
  return (
    <Formik<T>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
          <View style={styles.container}>
            {children}
          </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
  },
});
