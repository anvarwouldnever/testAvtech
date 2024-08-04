import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesItem';

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

export default ToDoItem;
