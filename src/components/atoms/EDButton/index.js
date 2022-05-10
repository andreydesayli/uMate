import React, {useCallback, useRef} from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
//import {styles} from './styles';
import {Delete, Add} from '../../../assets';

const EDButton = ({title, color = '#02CF8E', onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.container1}>
          <Image style={styles.image} source={Delete} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.container2}>
          <Image style={styles.image} source={Add} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default EDButton;

const styles = StyleSheet.create({
  container1: {
    // paddingLeft: 20,
    // paddingVertical: 20,
    // paddingRight: 80,
    backgroundColor: '#02CF8E',
    paddingHorizontal: 20,
    flex: 1,
    weight: 20,
    top: -400,
  },
  // eslint-disable-next-line no-dupe-keys
  container2: {
    paddingLeft: 320,
    // paddingVertical: 20,
    // paddingRight: 80,
    backgroundColor: '#02CF8E',
    paddingHorizontal: 20,
    flex: 1,
    weight: 20,
    top: -400,
  },
});
