import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput as TextInputRN,
  TouchableOpacity,
} from 'react-native';
import { send, mic } from '../../assets';

const ChatInput = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.text}></Text>
          <TextInputRN
            multiline
            style={styles.input}
            placeholder="Type something..."
            onChangeText={() => {}}
          />
          <TouchableOpacity style={styles.sendButton}>
            <Image style={styles.imageSend} source={send} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.micButton}>
            <Image style={styles.imageMic} source={mic} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ABA6E5',
    paddingTop: 100,
    width: 414,
    height: 100,
    justifyContent: 'center',
  },
  sendButton: {
    top: -120,
    right: -282,
  },
  micButton: {
    top: -120,
    left: 237,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginBottom: 6,
    color: '#020202',
  },
  input: {
    borderWidth: 1,
    borderColor: '#766090',
    backgroundColor: 'white',
    borderRadius: 7,
    paddingLeft: 10,
    width: 292,
    height: 42,
    left: -58,
    paddingHorizontal: 10,
    top: -77,
  },
});
