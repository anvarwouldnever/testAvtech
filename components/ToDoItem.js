import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesItem';
import { useDeleteAnimation } from '../animations/animation';
import Animated from 'react-native-reanimated';

const ToDoItem = ({ item, onDelete, onDone }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const animatedDeletion = useDeleteAnimation(isDeleting);

    const handleDelete = () => {
      setIsDeleting(true);
      setTimeout(() => {
        onDelete(item.id);
      }, 400);
    };

    return (
        <Animated.View style={[styles.item, animatedDeletion]}>
            <View style={styles.buttonAndTextView}>
                <TouchableOpacity onPress={() => onDone(item.id)} style={styles.button}>
                    {item.done && <Text>✓</Text>}
                </TouchableOpacity>
                <View style={styles.textView}>
                    <Text style={{textDecorationLine: item.done? 'line-through' : 'none'}}>{item.text}</Text>
                </View>
            </View>
            <TouchableOpacity style={{alignSelf: 'center'}} onPress={handleDelete}>
              <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
        </Animated.View>
    )
};

export default ToDoItem;
