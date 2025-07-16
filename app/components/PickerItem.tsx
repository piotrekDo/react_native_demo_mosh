import React from 'react'
import { TouchableOpacity } from 'react-native'
import AppText from './AppText'

interface Props {
    label: string;
    onPress: () => void;
}

export const PickerItem = ({label, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <AppText >{label}</AppText>
    </TouchableOpacity>
  )
}
