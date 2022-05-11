import { StyleSheet, Text, View, SafeAreaView, Switch } from 'react-native'
import React, {useState} from 'react'

const Toggle = () => {
  const [switchValue, setSwitchValue] = useState(false);
  

  const toggleSwitch = (value) => {
      setSwitchValue(value);
  }
    return (
        <SafeAreaView>
            <View style={styles.container1}>
            <Text style={styles.text}>Set Online Status</Text>
            <View style={styles.container}>
                <Switch onValueChange={toggleSwitch} value={switchValue}/>
            </View>
            </View>
        </SafeAreaView>
  )
}

export default Toggle

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'flex-end',
        marginTop: 39,
        marginRight: 25,

    },
    container1: {
        flexDirection: 'row',
    },
    text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 24,
        color: 'black',
        marginLeft: 26,
        marginVertical: 39,
    }
})