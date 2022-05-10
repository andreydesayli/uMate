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

const InterestText = ({
  title,
  color = '#02CF8E',
  textColor = '#020202',
  onPress,
}) => {
  return (
    <View style={styles.int}>
      <Text style={styles.text(textColor)}>{title}</Text>
    </View>
  );
};

export default InterestText;

const styles = StyleSheet.create({
  container: {
    height: 35,
    // backgroundColor: '#DEA6D5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#DEA6D5',
  },
  text: textColor => ({
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    color: textColor,
    alignItems: 'center',
    justifyContent: 'center',
    right: -11,
    bottom: -2,
  }),
  int: {
    position: 'absolute',
    // backgroundColor: '#DEA6D5',
    width: 70,
    height: 30,
    top: 600,
    borderRadius: 200,
    borderColor: 'black',
    borderWidth: 1.5,
    left: 25,
  },
  in: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    right: -25,
    color: 'white',
    fontWeight: 'bold',
    top: -5,
  },
});
