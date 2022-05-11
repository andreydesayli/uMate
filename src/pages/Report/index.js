import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput, Button, AddButton} from '../../components'
import { IconBack } from '../../assets'

const Report = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <TouchableOpacity>
    <IconBack onPress={() => navigation.navigate('Help')}>Help</IconBack> 
    </TouchableOpacity>
    <Text style={styles.text}>Report</Text>
    </View>
    <View>
    <View>
    <Text style={styles.text1}>Describe your problem</Text>
    <TextInput mL={15} mR={15} pad={60} placeholder=''></TextInput>
    </View>
    <Text style={styles.text2}>Please insert screenshot so we can better understand your problem (Max. 1MB)</Text>
    <View style={styles.button1}>
    <AddButton 
          width = {145}
          height = {45}
          title="Add File"
          color='#554CCD'
        />
        </View>
    </View>
    <View style={styles.button2}>
    <Button 
          ml = {230}
          mr ={22}
          width = {162}
          height = {45}
          title="Submit"
          color='#554CCD'
          onPress={() => navigation.navigate('Help')}
        />
    </View>

</View>
  )
}

export default Report

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#D3D3D380',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 33,
    },

    text: {
        fontSize: 35,
        fontFamily: 'Roboto-Bold',
        color: 'black',
        marginLeft:20,
        alignItems: 'center',
        
    },

    border: {
        width: 3400,
        borderBottomWidth: 3,
        borderColor: '#554CCD',
    },

    text1: {
        fontFamily: 'Roboto-Bold',
        fontSize: 24,
        color: 'black',
        marginLeft: 15,
        marginTop: 21,
    },

    text2: {
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: 'black',
        marginHorizontal:18,
        marginVertical: 22,


    },

    button1: {
        marginLeft: 9,

    },

    button2: {
        marginBottom:100,
        marginTop: 50,
        marginLeft: 230
    }
})