import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { IconMatch } from '../../assets/icons'
import { Button, Gap } from '../../components/atoms/'

const Match = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <ImageBackground 
        source={require('../../assets/image/Matching.jpg')} 
        style={{flex: 1}}>
        <View style={styles.textWrapper}>
        <Text style={styles.text}>YOU MATCH!</Text>
        </View>
        <View style={styles.profile}>
           <Image source={require('../../assets/image/user1.png')} />
           <View style={styles.icon}>
            <IconMatch />
           </View>
           <Image source={require('../../assets/image/user2.png')} />
        </View>
        <Gap height={100} />
        <Button 
        title="Chat"
        mL={31}
        mR={31}
        color="#E16E85"
        onPress={() => navigation.navigate('Chat')}
        />
        <Gap height={22} />
        <Button 
        title="Home"
        mL={31}
        mR={31}
        color="#CECEE5"
        onPress={() => navigation.navigate('Home')}
        />
        </ImageBackground>
    </View>
  )
}

export default Match

const styles = StyleSheet.create({
    icon: {
        marginTop: 20,
        marginLeft: 10
    },
    profile: {
        flexDirection: 'row',
        marginLeft: 63,
        marginTop: 178
    },
    text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 40,
        marginTop: 105,
        color: 'white'
    },
    textWrapper: {
        alignItems: 'center'
    }
})