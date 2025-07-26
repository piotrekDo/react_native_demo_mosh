import React from 'react';
import { ImageInputList } from '../ImageInputList';
import { ErrorMessage } from './ErrorMessage';
import { useFormikContext } from 'formik';
import { TextInputProps } from 'react-native';

interface Props<T> extends TextInputProps {
  name: string;
}

export const FormImagePicker = <T extends object>({ name }: Props<T>) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<T>();

  const imageUris = (values as any)[name] || [];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: string) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
      <ErrorMessage message={(errors as any)[name] as string} />
    </>
  );
};
