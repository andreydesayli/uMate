import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Gap } from '../../components'
import { IconBack, User } from '../../assets/icons'

const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
      <Gap width={20} />
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.iconBack}>
            <IconBack 
            onPress={() => ({})}
            />
        </View>
      </TouchableOpacity>
      <Text elevation={5} style={styles.text}>Notification</Text>
      </View>

      <ScrollView>
      <Text style={styles.text1}>Recent</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Match')}>
      <View style={styles.message} >
          <User width={51} height={50}/>
          <View style={styles.messageWrapper}>
            <Text style={styles.messageText1}>You've been liked by Roger</Text>
            <Text style={styles.messageText2}>Tap to Match</Text>
          </View>
          <View style={styles.timeWrapper}>
              <Text style={styles.time}>2s</Text>
          </View>
      </View>
      </TouchableOpacity>
      <Gap height={10}/>
      <TouchableOpacity activeOpacity={0.8} >
      <View style={styles.message}>
          <User width={51} height={50}/>
          <View style={styles.messageWrapper}>
            <Text style={styles.messageText1}>You got message from John Doe</Text>
            <Text style={styles.messageText2}>Tap to View</Text>
          </View>
          <View style={styles.timeWrapper}>
              <Text style={styles.time}>4h</Text>
          </View>
      </View>
      </TouchableOpacity>
      <Gap height={10} />
      <Text style={styles.text2}>Earlier</Text>
      <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.message}>
          <User width={51} height={50}/>
          <View style={styles.messageWrapper}>
            <Text style={styles.messageText1}>You got message from John Doe</Text>
            <Text style={styles.messageText2}>Tap to View</Text>
          </View>
          <View style={styles.timeWrapper}>
              <Text style={styles.time}>1w</Text>
          </View>
      </View>
      </TouchableOpacity>
      <Gap height={10} />
      <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.message}>
          <User width={51} height={50}/>
          <View style={styles.messageWrapper}>
            <Text style={styles.messageText1}>You got message from John Doe</Text>
            <Text style={styles.messageText2}>Tap to View</Text>
          </View>
          <View style={styles.timeWrapper}>
              <Text style={styles.time}>1w</Text>
          </View>
      </View>
      </TouchableOpacity>
      <Gap height={10} />
      <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.message}>
          <User width={51} height={50}/>
          <View style={styles.messageWrapper}>
            <Text style={styles.messageText1}>You got message from John Doe</Text>
            <Text style={styles.messageText2}>Tap to View</Text>
          </View>
          <View style={styles.timeWrapper}>
              <Text style={styles.time}>2w</Text>
          </View>
      </View>
      </TouchableOpacity>
      <Gap height={10} />
      <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.message}>
          <User width={51} height={50}/>
          <View style={styles.messageWrapper}>
            <Text style={styles.messageText1}>You got message from John Doe</Text>
            <Text style={styles.messageText2}>Tap to View</Text>
          </View>
          <View style={styles.timeWrapper}>
              <Text style={styles.time}>3w</Text>
          </View>
      </View>
      </TouchableOpacity>
      <Gap height={10} />
      <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.message}>
          <User width={51} height={50}/>
          <View style={styles.messageWrapper}>
            <Text style={styles.messageText1}>You got message from John Doe</Text>
            <Text style={styles.messageText2}>Tap to View</Text>
          </View>
          <View style={styles.timeWrapper}>
              <Text style={styles.time}>4w</Text>
          </View>
      </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    timeWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    time:{
        fontFamily: 'Roboto-Bold',
        fontSize: 10,
        color: 'black',
    },
    message: {
        padding:20,
        backgroundColor:'white',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        elevation: 5,
        shadowRadius: 2,
        shadowOffset: {
        height: 2,
        width: 1
        },
        flexDirection: 'row'
    },
    messageText1: {
        fontFamily: 'Roboto-Bold',
        fontSize: 15,
        color: 'black'
    },
    messageText2: {
        fontFamily: 'Roboto-Medium',
        fontSize: 10
    },
    messageWrapper: {
        marginLeft: 6,
    },  
    headerWrapper: {
        backgroundColor: '#D3D3D380',
        paddingBottom: 21,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconBack:{
        marginTop: 42,
    },
    text2: {
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        color: 'black',
        paddingLeft: 20,
        paddingTop: 88,
        backgroundColor: 'white',
    },
    text1: {
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        color: 'black',
        paddingTop: 48,
        paddingLeft: 20,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 35, 
        fontFamily: 'Roboto-Bold',
        color: 'black',
        marginLeft: 3,
        marginTop: 42,
    },
    border: {
        left: 45,
        width: 311,
        borderBottomWidth: 3,
        borderColor: '#554CCD'
    }, 
})