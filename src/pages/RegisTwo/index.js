import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState}  from 'react'
import { Button, TextInput, Gap } from '../../components'
import { IconBack, User } from '../../assets/icons'
import RNPickerSelect from 'react-native-picker-select';

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
      onPress={() => navigation.navigate('RegisOne')}
      />
      <Gap width={20} />
      <Text style={styles.text}>{title}</Text>
      
      
           
        </View>
        <Gap height={30} />
      <Text style={styles.text3}>Faculty</Text>
      <TextInput mL={40} mR={40} placeholder='  Faculty of..'></TextInput>
      <Gap height={30} />
      <Text style={styles.text3}>Semester</Text>
      <TextInput mL={40} mR={40} placeholder='  6th'></TextInput>
      <Gap height={30} />
      <Text style={styles.text3}>Position</Text>
      <RNPickerSelect
            placeholder={{
              label: 'Student',
              value: 'Student',
              
            }}
            onValueChange={(value) => console.log()}
            items={[
                { label: 'Lecturer', value: 'Lecturer' },
                { label: 'Staff', value: 'Staff' },
            ]}
            style={
                pickerSelectStyles.inputAndroid
            }
        />
      
      <Gap height={50} />
      <Button mL={120} mR={120} title={'Next'} onPress={() => navigation.navigate('RegisThree')}>Next</Button>
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});