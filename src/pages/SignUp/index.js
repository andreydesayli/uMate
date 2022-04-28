import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput, Gap } from '../../components'

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerWrapper}>
            <Button 
                title="Sign in"
                color='white'
                textColor='#554CCD'
                onPress={() => navigation.navigate('SignIn')}
            />
            <Button 
                title="Sign up"
            />
        </View>
        <View style={styles.input}>
            <TextInput 
                title="Register Number"
                placeholder="S12345678"
            />
            <Gap height={30} />
            <TextInput 
                title="Username"
                placeholder="Username"
            />
            <Gap height={30} />
            <TextInput 
                title="Password"
                placeholder="*****"
            />
        </View>
        <View style={styles.button}>
            <Button 
                title="Register"
                onPress={() => navigation.navigate('RegisOne')}
            />
        </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        flex: 1,
        marginTop: 125,
        marginHorizontal: 110,
    },
    input: {
        marginHorizontal: 35,
        marginTop: 29,
    },
    headerWrapper: {
        backgroundColor: '#D3D3D380',
        paddingTop: 40,
        paddingBottom: 33,
        paddingHorizontal: 45,
        flexDirection: 'row',
    }
})