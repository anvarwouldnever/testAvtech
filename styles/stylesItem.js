import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: SCREEN_WIDTH * 0.8905,
    height: 'auto',
  },
  delete: {
    color: 'red',
  },
  textView: {
    width: SCREEN_WIDTH * 0.6870229, 
    height: '100%', 
    marginLeft: 10, 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  buttonAndTextView: {
    width: 'auto', 
    height: '100%', 
    flexDirection: 'row'
  },
  button: {
    justifyContent: 'center', 
    alignItems: 'center', 
    width: 20, 
    height: 20, 
    borderRadius: 5, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    borderStyle: 'solid', 
    alignSelf: 'center'
  }
});

export default styles;
