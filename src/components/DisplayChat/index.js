import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react'

const DisplayChat = () => {
  return (
    <>
      <View style={styles.container1}>
        <Text style={styles.input}>Hi</Text>
        {/* time1 sebenarnya */}
        <Text style={styles.time2}>07.27</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.input2}>hi!</Text>
        <Text style={styles.time1}>07.27</Text>
      </View>
      <View style={styles.container3}>
        <Text style={styles.input3}>Nice to know you :)</Text>
        <Text style={styles.time3}>07.29</Text>
      </View>
      <View style={styles.container4}>
        <Text style={styles.input4}>u too!</Text>
        <Text style={styles.time4}>07.30</Text>
      </View>
    </>
  );
};

export default DisplayChat;

const styles = StyleSheet.create({
  container1: {
    position: 'absolute',
    backgroundColor: '#7BC9DECC',
    width: 178,
    height: 40,
    top: 164,
    borderRadius: 10,
    left: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    flex: 1,
    elevation: 20,
  },
  container2: {
    position: 'absolute',
    backgroundColor: '#D28DD5CC',
    width: 178,
    height: 40,
    top: 231,
    borderRadius: 10,
    left: 223,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    flex: 1,
    elevation: 20,
  },
  container3: {
    position: 'absolute',
    backgroundColor: '#7BC9DECC',
    width: 227,
    height: 40,
    top: 313,
    borderRadius: 10,
    left: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    flex: 1,
    elevation: 20,
  },
  container4: {
    position: 'absolute',
    backgroundColor: '#D28DD5CC',
    width: 178,
    height: 40,
    top: 402,
    borderRadius: 10,
    left: 223,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    flex: 1,
    elevation: 20,
  },
  input: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    flex: 1,
    color: 'white',
    left: 20,
    top: 11,
  },
  input2: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    flex: 1,
    color: 'white',
    left: 145,
    top: 11,
  },
  time1: {
    fontFamily: 'Roboto-Bold',
    fontSize: 10,
    flex: 1,
    color: 'black',
    left: -190,
    top: -45,
  },
  time2: {
    fontFamily: 'Roboto-Bold',
    fontSize: 10,
    flex: 1,
    color: 'black',
    left: 345,
    top: 90,
  },
  input3: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    flex: 1,
    color: 'white',
    left: 20,
    top: 11,
  },
  time3: {
    fontFamily: 'Roboto-Bold',
    fontSize: 10,
    flex: 1,
    color: 'black',
    left: 8,
    top: 23,
  },
  input4: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    flex: 1,
    color: 'white',
    left: 125,
    top: 11,
  },
  time4: {
    fontFamily: 'Roboto-Bold',
    fontSize: 10,
    flex: 1,
    color: 'black',
    left: 147,
    top: 23,
  },
});