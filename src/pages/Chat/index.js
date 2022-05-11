import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {active, goBack} from '../../assets';
import { V } from '../../assets/icons/ImgProfile';
import ChatInput from './input';
import {Gap} from '../../components';
import DisplayChat from '../../components/DisplayChat';

const Chat = ({navigation, username, bio, picture, onPress}) => {
  return (
    <>
      <>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image style={styles.image} source={goBack} />
          </TouchableOpacity>
          <Image style={styles.imageV} source={V} />
          <Text style={styles.username}>Taehyung</Text>
          {/* <View style={styles.onlineStatus} /> */}
          <Image style={styles.active} source={active} />
        </View>
        <View style={styles.profileAndOptions}></View>
        <DisplayChat />
      </>
      <ChatInput placeholder="Type your password" />
    </>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#DEA6D5',
    paddingTop: 110,
    width: 414,
    height: 140,
  },
  image: {
    width: 64,
    height: 55,
    top: -67,
  },
  imageV: {
    width: 55,
    height: 55,
    top: -67,
    left: 0,
    borderRadius: 90,
  },
  profileAndOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  usernameAndOnlineStatus: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  username: {
    fontFamily: 'Roboto-Medium',
    fontSize: 33,
    height: 55,
    top: -67,
    color: 'white',
    left: 10,
  },
  active: {
    top: -45,
    left: 20,
  },
});