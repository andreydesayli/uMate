import React, {useCallback, useRef} from 'react';
import {Close, Heart} from '../../../assets';
import {Animated, TouchableOpacity, View, Image} from 'react-native';
import {styles} from './styles';

export default function RoundButton({name, size, onPress, handleChoice}) {
  const scale = useRef(new Animated.Value(1)).current;

  const animateScale = useCallback(
    newValue => {
      Animated.spring(scale, {
        toValue: newValue,
        friction: 4,
        useNativeDriver: true,
      }).start();
    },
    [scale],
  );
  return (
    <>
      <TouchableOpacity
        onPressIn={() => animateScale(0.8)}
        delayPressIn={0}
        onPress={() => handleChoice(-1)} // untuk swipe left nope di tombol x
        onPressOut={() => {
          animateScale(1);
        }}
        delayPressOut={110}>
        <Animated.View style={[styles.buttonNope, {transform: [{scale}]}]}>
          <Image source={Close} />
        </Animated.View>
      </TouchableOpacity>

      <TouchableOpacity
        // {/* style={styles.buttonLike} */}
        onPressIn={() => animateScale(0.8)}
        delayPressIn={0}
        // agar ketika tekan tombol like bisa swipe foto.
        onPress={() => handleChoice(1)} //untuk tombol like jadi ba swipe
        onPressOut={() => {
          animateScale(1);
        }}
        delayPressOut={110}>
        <Animated.View style={[styles.buttonLike, {transform: [{scale}]}]}>
          <Image source={Heart} />
        </Animated.View>
      </TouchableOpacity>
    </>
  );
}
