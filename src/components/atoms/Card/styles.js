import {StyleSheet} from 'react-native';
import {CARD} from '../utils/constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, // untuk atas foto turun ke bawah
  },
  image: {
    width: 340,
    height: 362,
    borderRadius: CARD.BORDER_RADIUS,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 160,
    borderRadius: CARD.BORDER_RADIUS,
  },
  name: {
    position: 'absolute',
    bottom: 70,
    left: 22,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
  },
  cym: {
    position: 'absolute',
    //  bottom: 50,
    left: -15,
    fontSize: 30,
    top: -60,
    fontWeight: 'bold',
    color: '#fff',
  },
  desc: {
    position: 'absolute',
    bottom: 25,
    left: 22,
    fontSize: 15,
    color: '#fff',
  },
  choiceContainer: {
    position: 'absolute',
    top: 100,
  },
  likeContainer: {
    left: 45,
    transform: [{rotate: '-30deg'}],
  },
  nopeContainer: {
    right: 45,
    transform: [{rotate: '30deg'}],
  },
});
