import React, {useCallback, useRef} from 'react';
import {
  Animated,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
//import {styles} from './styles';
import {Delete, Add} from '../../../assets';

const Interest = () => {
  return (
    <TouchableOpacity>
      <View style={styles.int}>
        <Text style={styles.in}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Interest;

const styles = StyleSheet.create({
  container: {
    height: 35,
    backgroundColor: '#DEA6D5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    top: -15,
    fontSize: 40,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  int: {
    position: 'absolute',
    backgroundColor: '#DEA6D5',
    width: 45,
    height: 30,
    top: 162,
    right: 55,
    borderRadius: 200,
  },
  in: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    right: -14,
    color: 'white',
    fontWeight: 'bold',
    top: -7,
  },
});
