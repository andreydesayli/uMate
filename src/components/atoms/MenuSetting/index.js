import React, {useCallback, useRef} from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
//import {styles} from './styles';
import {filter, setting} from '../../../assets';

const MenuSetting = ({title, color = '#02CF8E', onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.container1}>
          <Image style={styles.image} source={filter} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.container2}>
          <Image style={styles.image} source={setting} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MenuSetting;

const styles = StyleSheet.create({
  container1: {
    // paddingLeft: 20,
    // paddingVertical: 20,
    // paddingRight: 80,
    // backgroundColor: '#02CF8E',
    // paddingHorizontal: 20,
    // flex: 2,
    // // weight: 20,
    top: -320,
    left: 130,
  },
  container2: {
    // paddingLeft: 20,
    // paddingVertical: 20,
    // paddingRight: 80,
    // backgroundColor: '#02CF8E',
    // paddingHorizontal: 20,
    // flex: 2,
    // // weight: 20,
    top: -350,
    left: 170,
  },
});
