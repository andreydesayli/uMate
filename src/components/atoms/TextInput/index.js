import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react'

const TextInput = ({title, placeholder='12/09/2000'}) => {
  return (
    <View>
        <Text style={styles.text}>{title}</Text>
        <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        color: '#000000',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 11,
        padding: 10,
        marginRight: 250,
        marginLeft: 40
    }
})