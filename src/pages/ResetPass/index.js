import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { IconBack } from '../../assets/icons'
import { Button, TextInput, Gap } from '../../components'

const ResetPass = ({navigation, title='Reset Password', onBack}) => {
  return (
    <View>
        <View style={styles.headerWrapper}>
        {onBack && (
        <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
        <View style={styles.back}>
            
        </View>
        </TouchableOpacity>
        )}
    <TouchableOpacity activeOpacity={0.7}>
        <IconBack 
        onPress={() => navigation.navigate('ResetPassOne')}
        />
    </TouchableOpacity>
    <Gap width={20} />
    <Text style={styles.text}>{title}</Text>
  </View>
  <Gap height={20} />
  <Text style={styles.text3}>New Password</Text>
  <TextInput mL={40} mR={40}  placeholder='  *****'></TextInput>
  <Gap height={20} />
  <Text style={styles.text3}>Confirm Password</Text>
  <TextInput mL={40} mR={40}  placeholder='  *****'></TextInput>
  <Gap height={50} />
  <Button mL={120} mR={120} style={styles.button1} title={'Save'} onPress={() => navigation.navigate('SignIn')}>Next</Button>
  </View>

  )
}

export default ResetPass

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: '#D3D3D380',
        paddingTop: 40,
        paddingBottom: 33,
        flexDirection: 'row',
        alignItems: 'center'
    },
    back:{
        padding: 10,
    }, 
    text: {
        fontSize: 35, 
        fontFamily: 'Roboto-Bold',
        color: 'black',
        marginLeft: 20
    },
    text3: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        color: 'black',
        marginLeft: 40
    },
})