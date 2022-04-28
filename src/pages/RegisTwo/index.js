import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, TextInput, Gap } from '../../components'
import { IconBack, User } from '../../assets/icons'

const RegisTwo = ({navigation, title='Registration', onBack}) => {
  return (
    <View style={styles.container}>
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
        <Gap height={10} />
      <Text style={styles.text3}>Faculty</Text>
      <TextInput></TextInput>
      <Gap height={20} />
      <Text style={styles.text3}>Semester</Text>
      <TextInput></TextInput>
      <Gap height={20} />
      <Button style={styles.button1} title={'Next'} onPress={() => navigation.navigate('RegisTwo')}>Next</Button>
      <Gap height={25} />
      <View style={styles.border1} />
    </View>
  )
}

export default RegisTwo

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    text2: {
        fontSize: 24,
        fontFamily: 'Roboto-Bold',
        color: 'black',
        marginLeft: 90
    },
    text3: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        color: 'black',
        marginLeft: 50
    },
    border: {
        left: 45,
        width: 311,
        borderBottomWidth: 3,
        borderColor: '#554CCD'
    }, 
    border1: {
        left: 45,
        width: 311,
        borderBottomWidth: 10,
        borderColor: '#554CCD',
        borderRadius: 10
    }, 
})