import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

//
//
//  npx expo install react-native-dropdown-picker
//
//

interface Props {
  items: { label: string; value: string }[];
  placeholder?: string;
  onSelect: (value: string | null) => void;
}

export const AppDropdownPicker = ({ items, placeholder, onSelect }: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [pickerItems, setPickerItems] = useState(items);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={pickerItems}
        setOpen={setOpen}
        setValue={(callback) => {
          const val = callback(value);
          setValue(val);
          onSelect(val);
        }}
        setItems={setPickerItems}
        placeholder={placeholder}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    zIndex: 1000, // ważne dla widoczności nad innymi komponentami
  },
  dropdown: {
    backgroundColor: colors.light,
    borderRadius: 25,
    borderColor: colors.medium,
    paddingHorizontal: 15,
    height: 50,
  },
  dropdownContainer: {
    backgroundColor: colors.light,
    borderColor: colors.medium,
  },
});
