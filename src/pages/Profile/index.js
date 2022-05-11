import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header} from '../../components';
// import {Jisoo} from '../../assets';
import { Jisoo } from '../../assets/icons/ImgProfile';
import { CARD } from '../../components';
// import {CARD} from '../../utils/constants';
import {Line} from '../../assets';
import EDButton from '../../components/atoms/EDButton';
import Interest from '../../components/atoms/Interest';
import InterestText from '../../components/atoms/InterestText';

const Profile = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.theme} />
        <Text style={styles.text}>My Profile</Text>
        <View style={styles.contentWrapper}>
          <Image style={styles.image} source={Jisoo} />
        </View>
        <Text style={styles.jisoo}>Jisoo, 21</Text>
        <Text style={styles.fakultas}>Computer Science / 3</Text>
        <View style={styles.line} />
        <View style={styles.wrap}>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            ultrices lectus.{' '}
          </Text>
          <EDButton />
        </View>
        <View style={styles.line2} />
        <Text style={styles.interest}>Interest</Text>
        <Interest />
        <InterestText title="Singing" />
        {/* <Interest title="+" textColor="black" /> */}
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  theme: {
    position: 'absolute',
    backgroundColor: '#DEA6D5',
    width: 500,
    height: 320,
    top: -100,
    borderRadius: 200,
  },
  image: {
    width: 361,
    height: 260,
    borderRadius: 10,
  },
  contentWrapper: {
    // untuk card love nope
    top: 70,
    width: 361,
    height: 241,
    backgroundColor: 'white',
    borderRadius: 40,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 7,
    elevation: 15,
  },
  text: {
    top: 50,
    fontSize: 40,
    color: 'white',
    fontFamily: 'Roboto-Bold',
  },
  jisoo: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    color: 'black',
    left: -120,
    top: 90,
  },
  fakultas: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: '#C4C4C4',
    left: -85,
    top: 90,
  },
  line: {
    position: 'absolute',
    backgroundColor: '#D8D8D8',
    width: 368,
    height: 2,
    bottom: 235,
    borderRadius: 200,
  },
  desc: {
    fontSize: 17,
    fontFamily: 'Roboto-Medium',
    color: '#C4C4C4',
  },
  wrap: {
    width: 368,
    height: 50,
    bottom: -120,
  },
  line2: {
    position: 'absolute',
    backgroundColor: '#D8D8D8',
    width: 368,
    height: 2,
    bottom: 150,
    borderRadius: 200,
  },
  interest: {
    fontFamily: 'Roboto-Bold',
    color: 'black',
    fontSize: 20,
    bottom: -150,
    left: -148,
  },
});
