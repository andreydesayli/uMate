import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react'

const TextInput= ({title, placeholder='12/09/2000', mL, mR, pad}) => {
  return(
  <View>
        <Text style={styles.text}>{title}</Text>
        <TextInputRN style={styles.input(mL, mR, pad)} placeholder={placeholder} />
    </View>
  )
};

export default TextInput;

const styles = StyleSheet.create({
 text: {
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        color: '#000000',
    },
    
input: (mL, mR, pad) => ({
    borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 11,
        padding: pad,
        marginRight: mR,
        marginLeft: mL
  }),
});