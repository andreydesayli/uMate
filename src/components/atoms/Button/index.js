import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title, color='#554CCD', textColor="#ffffff", onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.container(color)}>
            <Text style={styles.text(textColor)} >{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
    container: color => ({
            height: 45,
            backgroundColor: color,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            paddingHorizontal: 46,
        }),
    text: textColor => ({
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: textColor,

    }),
})