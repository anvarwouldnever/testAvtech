import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, TouchableOpacity, Text, Keyboard, Platform } from 'react-native';
import ToDoList from '../components/ToDoList';
import useToDo from '../hooks/useToDo';
import styles from '../styles/stylesHome';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const { todos, addTodo, deleteTodo, completeTodo } = useToDo();

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
    Keyboard.dismiss()
  };

  return (
    <View style={styles.container}>
        <View style={styles.headerView}>
            <Text style={styles.headerText}>Задачи</Text>
            <View style={styles.line}/>
        </View>
        <View style={styles.flatlist}>
            <ToDoList items={todos} onDelete={deleteTodo} onDone={completeTodo}/>
        </View>
        <KeyboardAvoidingView style={styles.inputView} keyboardVerticalOffset={Platform.OS === 'ios'? 10 : 0} behavior={Platform.OS === 'ios'? 'padding' : 'height'}>
            <TextInput
                style={styles.input}
                placeholder="Добавить задачу"
                value={text}
                onChangeText={(text) => setText(text)}
            />
            <TouchableOpacity style={[styles.addbutton, {backgroundColor: text === ''? 'grey' : 'red'}]} onPress={text === ''? () => {return} : () => handleAddTodo()}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
};

export default HomeScreen;
