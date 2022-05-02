import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title, color='#554CCD', textColor="#ffffff", onPress, width, height=45, mL, mR}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.container(color, width, height, mL, mR)}>
            <Text style={styles.text(textColor)} >{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
    container: (color, width, height, mL, mR) => ({
            height: height,
            width: width,
            backgroundColor: color,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginLeft: mL,
            marginRight: mR,
        }),
    text: textColor => ({
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        color: textColor,
        marginHorizontal: 46,
    }),
})