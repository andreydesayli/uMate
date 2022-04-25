import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { Logo } from '../../assets/icons'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('SignIn');
        }, 3000);
      }, []); 
  return (
    <View style={styles.container}>
      <Logo width={409} height={284} />
      <Text style={styles.text}>UMate</Text>
    </View> 
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
          fontSize: 50,
          color: '#E214C1',
          fontFamily: 'Pacifico-Regular',
      }
})