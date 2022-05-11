import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const AddButton = ({title, color='#D3D3D3', textColor="black", onPress, width, height, mL, mR}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.container(color, width, height, mL, mR)}>
            <Text style={styles.text(textColor)} >{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default AddButton;

const styles = StyleSheet.create({
    container: (color, width, height, mL, mR) => ({
            height: height,
            width: width,
            backgroundColor: '#D3D3D3',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginLeft: mL,
            marginRight: mR,
        }),
    text: textColor => ({
        fontSize: 13,
        fontFamily: 'Roboto-Bold',
        color: textColor,
        marginHorizontal: 46,
    }),
})