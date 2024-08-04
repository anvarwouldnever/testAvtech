import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    width: SCREEN_WIDTH * 0.71246,
    height: SCREEN_HEIGHT * 0.07042,
    borderRadius: 50,
    paddingHorizontal: 15,
  },
  addbutton: {
    width: SCREEN_WIDTH * 0.152671,
    height: SCREEN_HEIGHT * 0.07042,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerView: {
    position: 'absolute',
    left: SCREEN_WIDTH * 0.05089,
    top: 80,
  },
  headerText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
  },
  line: {
    width: SCREEN_WIDTH * 0.8905,
    borderColor: '#D6D6D6',
    borderWidth: 0.6,
    borderStyle: 'solid',
    marginTop: 10,
  },
  flatlist: {
    position: 'absolute',
    top: 140,
    height: SCREEN_HEIGHT * 0.68075,
    width: SCREEN_WIDTH * 0.8905,
    left: SCREEN_WIDTH * 0.05089,
  },
  inputView: {
    position: 'absolute',
    width: SCREEN_WIDTH * 0.89058,
    flexDirection: 'row',
    bottom: 30,
    right: SCREEN_WIDTH * 0.05089,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  plus: {
    fontSize: 30,
    lineHeight: 30,
  },
});

export default styles;
