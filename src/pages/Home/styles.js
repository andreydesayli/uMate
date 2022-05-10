import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  contentWrapper: {
    // untuk card love nope
    top: 120,
    width: 339,
    height: 362,
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
  theme: {
    position: 'absolute',
    backgroundColor: '#DEA6D5',
    width: 500,
    height: 320,
    top: -100,
    borderRadius: 200,
  },
});
