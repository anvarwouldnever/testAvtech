import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const ToDoItem = ({ item, onDelete, onDone }) => {

    return (
        <View style={styles.item}>
            <View style={styles.buttonAndTextView}>
                <TouchableOpacity onPress={() => onDone(item.id)} style={styles.button}>
                    {item.done && <Text>✓</Text>}
                </TouchableOpacity>
                <View style={styles.textView}>
                    <Text style={{textDecorationLine: item.done? 'line-through' : 'none'}}>{item.text}</Text>
                </View>
            </View>
            <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => onDelete(item.id)}>
              <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 8,
    borderColor: '#ccc', borderWidth: 1, borderStyle: 'solid',
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
    width: 'auto', height: '100%', flexDirection: 'row'
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

export default ToDoItem;
