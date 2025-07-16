import React, { useState } from 'react';
import { Button, Modal, StyleSheet, View, SafeAreaView, Text, TouchableOpacity, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../config/colors';
import { PickerItem } from './PickerItem';

interface Props {
  items: { label: string; value: string }[];
  placeholder?: string;
  onSelect: (value: string | null) => void;
}

export const ModalAppDropdownPicker = ({ items, placeholder, onSelect }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = useState(true); // zawsze true w modalu
  const [value, setValue] = useState<string | null>(null);
  const [pickerItems, setPickerItems] = useState(items);

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.container}>
        <Text style={styles.fakeInput}>
          {value ? items.find(item => item.value === value)?.label : placeholder ?? 'Wybierz...'}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='slide'>
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
          <FlatList
            data={items}
            keyExtractor={item => item.label}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setValue(item.value);
                  setModalVisible(false);
                }}
              />
            )}
          />

          <View style={{ marginTop: 20 }}>
            <Button
              title='Zamknij'
              onPress={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: colors.light,
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    borderColor: colors.medium,
    borderWidth: 1,
  },
  fakeInput: {
    color: colors.dark,
  },
});
