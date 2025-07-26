import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { AppForm } from "../components/form/AppForm";
import { SubmitButton } from "../components/form/SubmitButton";
import { AppFormField } from "../components/form/AppFormField";
import { AppDropdownPicker } from "../components/form/AppDropdownPicker";
import colors from "../config/colors";
import { IconPicker, IconPickerItemModel } from "../components/icon_picker/IconPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories: IconPickerItemModel[] = [
  {id: 'Furniture', icon: 'floor-lamp', color: '#fc5c65', text: 'Furniture'},
  {id: 'Cars', icon: 'car', color: '#fd9644', text: 'Cars'},
  {id: 'Cameras', icon: 'camera', color: '#fed330', text: 'Cameras'},
  {id: 'Games', icon: 'cards', color: '#26de81', text: 'Games'},
  {id: 'Clothing', icon: 'shoe-heel', color: '#2bcbba', text: 'Clothing'},
  {id: 'Sports', icon: 'basketball', color: '#45aaf2', text: 'Sports'},
  {id: 'Movies & Music', icon: 'headphones', color: '#4b7bec', text: 'Movies & Music'},
  {id: 'Books', icon: 'book-open-blank-variant', color: '#A55EEA', text: 'Books'},
  {id: 'Other', icon: 'window-maximize', color: '#65778A', text: 'Other'},
];

export const ListingEditScreen = () => {
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <IconPicker pickerItems={categories}/>
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 20,
  },
});