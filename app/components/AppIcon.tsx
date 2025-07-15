import React from 'react'
import { View, StyleProp } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface Props {
    name: string;
    size?: number;
    backgroundColor?: string;
    iconColor?: string;
}

export const AppIcon = ({name, size=40, backgroundColor="#000", iconColor="#fff"}: Props) => {
  return (
    <View style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <MaterialCommunityIcons name={name as any} color={iconColor} size={size * .5}/>
    </View>
  )
}
