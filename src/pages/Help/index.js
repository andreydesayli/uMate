import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Gap } from '../../components/atoms'
import { IconBack } from '../../assets'

const Help = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity>
            <IconBack onPress={() => navigation.navigate('Settings')}>Settings</IconBack> 
            </TouchableOpacity>
            <Text style={styles.text}>Help</Text>
            </View>
            <Gap height={25}/>
            <View style={styles.border}/>
            <TouchableOpacity>
            <Text style={styles.text1} onPress={() => navigation.navigate('Report')}>Report</Text> 
            </TouchableOpacity>
            <View style={styles.border}/>
            <TouchableOpacity>
            <Text style={styles.text1}>Contact Us</Text>
            </TouchableOpacity>
            <View style={styles.border}/>
    
        </View>
    )
}

export default Help

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
        marginLeft: 26,
        marginVertical: 39,
    },
})