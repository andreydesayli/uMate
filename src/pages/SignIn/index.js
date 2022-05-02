import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, TextInput, Gap } from '../../components'

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Button
          title="Sign in"
        />
        <Button 
          title="Sign up"
          color='white'
          textColor='#554CCD'
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
      <View style={styles.input} >
        <TextInput 
          title = "Register Number"
          placeholder= "   S12345678"
        />
        <Gap height={30} />
        <TextInput 
          title= "Password"
          placeholder= "   *****"
        />
      </View>
      <TouchableOpacity>
       <Text 
        style={styles.text} 
        activeOpacity={0.7}
        onPress={() => navigation.navigate('ResetPassOne')}
        >Forgot password?</Text>
      </TouchableOpacity>
      <View style={styles.button}>
        <Button 
         title="Login"
        />
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginTop: 161,
    marginHorizontal: 120,
  },
  headerWrapper: {
    backgroundColor: '#D3D3D380',
    paddingTop: 40,
    paddingBottom: 33,
    paddingHorizontal: 45,
    flexDirection: 'row',
  },
  input: {
    marginHorizontal: 35,
    marginTop: 29,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: '#B22222',
    marginTop: 39,
    marginLeft: 135,
    textDecorationLine: 'underline',
  }
})