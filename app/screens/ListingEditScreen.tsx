import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import { addListing } from '../api/listings';
import { AppForm } from '../components/form/AppForm';
import { AppFormField } from '../components/form/AppFormField';
import { FormImagePicker } from '../components/form/FormImagePicker';
import { SubmitButton } from '../components/form/SubmitButton';
import { IconPicker, IconPickerItemModel } from '../components/icon_picker/IconPicker';
import colors from '../config/colors';
import useUserLocation, { LocationCoords } from '../hooks/useUserLocation';

interface FormValues {
  title: string;
  price: number;
  description: string | undefined;
  category: IconPickerItemModel;
  images: string[];
  location: LocationCoords | undefined;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.').label('Images'),
});

const categories: IconPickerItemModel[] = [
  { id: 1, icon: 'floor-lamp', color: '#fc5c65', text: 'Furniture' },
  { id: 2, icon: 'car', color: '#fd9644', text: 'Cars' },
  { id: 3, icon: 'camera', color: '#fed330', text: 'Cameras' },
  { id: 4, icon: 'cards', color: '#26de81', text: 'Games' },
  { id: 5, icon: 'shoe-heel', color: '#2bcbba', text: 'Clothing' },
  { id: 5, icon: 'basketball', color: '#45aaf2', text: 'Sports' },
  { id: 6, icon: 'headphones', color: '#4b7bec', text: 'Movies & Music' },
  { id: 7, icon: 'book-open-blank-variant', color: '#A55EEA', text: 'Books' },
  { id: 8, icon: 'window-maximize', color: '#65778A', text: 'Other' },
];

export const ListingEditScreen = () => {
  const { userLocation } = useUserLocation();

const handleSubmit = async (listing: any) => {
  try {
    const result = await addListing({ ...listing, userLocation });
    console.log('result:', result);
    if (!result) {
      console.log('Response not OK', result.problem, result.data);
      return alert('Could not save the listing.');
    }
    alert('Success');
  } catch (error) {
    console.log('Error:', error);
    alert('Could not save the listing.');
  }
};

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name='images' />
        <AppFormField<FormValues> maxLength={255} name='title' placeholder='Title' />
        <AppFormField<FormValues> keyboardType='numeric' maxLength={8} name='price' placeholder='Price' width={120} />
        <IconPicker<FormValues> name='category' pickerItems={categories} />
        <AppFormField<FormValues>
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton title='Post' />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 20,
  },
});
