import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBack, ResetInfo } from '../../assets/icons'
import { Button, TextInput, Gap } from '../../components'

const ResetPassOne = ({navigation, title='Reset Password', onBack}) => {
  return (
    <View>
        <View style={styles.headerWrapper}>
        {onBack && (
        <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
        <View style={styles.back}>
            
        </View>
        </TouchableOpacity>
        )}
    <IconBack />
    <Gap width={20} />
    <Text style={styles.text}>{title}</Text>
  </View>
  <Gap height={20} />
  <View style={{flexDirection: 'row'}}>
  <Gap width={20} />
  <ResetInfo />
  <Text style={styles.text4}>Use SIU account to reset your password</Text>
  </View>
  
  <Gap height={20} />
  <Text style={styles.text3}>Register Number</Text>
  <TextInput mL={40} mR={40}  placeholder='  S12345678'></TextInput>
  <Gap height={20} />
  <Text style={styles.text3}>Password</Text>
  <TextInput mL={40} mR={40}  placeholder='  *****'></TextInput>
  <Gap height={50} />
  <Button mL={120} mR={120} style={styles.button1} title={'Next'} onPress={() => navigation.navigate('')}>Next</Button>
  </View>

  )
}

export default ResetPassOne

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
    text4: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        color: 'red',
        marginLeft: 10
    },
})