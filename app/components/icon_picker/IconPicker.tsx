import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Constants from 'expo-constants';
import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import colors from '../../config/colors';
import { IconPickerItem } from './IconPickerItem';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface IconPickerItemModel {
  id: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  text: string;
}

interface Props {
  pickerItems: IconPickerItemModel[];
}

export const IconPicker = ({ pickerItems }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IconPickerItemModel | undefined>(undefined);

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <View style={styles.pickerButtonContainer}>
            <Text style={styles.pickerButton}>{selectedItem ? selectedItem.text : 'Select category'}</Text>
            <Entypo name='chevron-down' size={24} color='black' />
          </View>
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalCloseButton}>
          <TouchableWithoutFeedback
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <AntDesign name='close' size={30} color='black' />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.pickerItemsContainer}>
          <FlatList
            numColumns={3}
            data={pickerItems}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  setSelectedItem(item);
                  setModalVisible(false);
                }}
                style={styles.touchableItem}
              >
                <IconPickerItem icon={item.icon} bgColor={item.color} text={item.text} />
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    zIndex: 1000,
  },
  pickerButtonContainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: 'auto',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pickerButton: {
    backgroundColor: colors.light,
  },
  modalCloseButton: {
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: Constants.statusBarHeight + 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  pickerItemsContainer: {
    padding: 30,
    flex: 1,
  },
  touchableItem: {
  width: '33%',
  // alignItems: 'center', 
  marginBottom: 30,     
  },
});
