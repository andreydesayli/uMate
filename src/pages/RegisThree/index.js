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
      <IconBack 
      onPress={() => navigation.navigate('RegisTwo')}
      />
      <Gap width={20} />
      <Text style={styles.text}>{title}</Text>
      
      
           
        </View>
        <Gap height={30} />
      <Text style={styles.text3}>Describe yourself</Text>
      <TextInput mL={40} mR={40} pad={30} placeholder=' I am ...'></TextInput>
      <Gap height={30} />
      <Text style={styles.text3}>Interest</Text>
      <Gap height={10} />
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 40}}>
        <Button width={110} height={40} title='Photography'></Button>
        <Gap width={2} />
        <Button width={55} height={40} title='Tech'></Button>
        <Gap width={2} />
        <Button width={55} height={40} title='Food'></Button>
        <Gap width={2} />
        <Button width={50} height={40} title='Art'></Button>
        <Gap width={2} />
        <Button width={80} height={40} title='Sports'></Button>
      </View>
      <Gap height={5} />
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 40}}>
        <Button width={70} height={40} title='Music'></Button>
        <Gap width={2} />
        <Button width={80} height={40} title='Gaming'></Button>
        <Gap width={2} />
        <Button width={80} height={40} title='Fashion'></Button>
        <Gap width={2} />
        <Button width={80} height={40} title='Travel'></Button>
        
      </View>
      
      <TextInput mL={40} mR={220} placeholder=' Others'></TextInput>
      <Gap height={40} />
      <Button mL={120} mR={120} style={styles.button1} title={'Done'} onPress={() => navigation.navigate('SplashScreen')}>Next</Button>
      <Gap height={25} />
      <View style={styles.border1} />
      
    </View>
    
  )
}

export default RegisTwo

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
        marginLeft: 40
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