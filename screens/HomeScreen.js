import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Text, Keyboard, Dimensions, Platform } from 'react-native';
import ToDoList from '../components/ToDoList';
import useToDo from '../hooks/useToDo';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderColor: 'black', borderWidth: 1, borderStyle: 'solid',
    width: SCREEN_WIDTH * 0.71246,
    height: SCREEN_HEIGHT * 0.07042,
    borderRadius: 50,
    paddingHorizontal: 15
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
    top: 80
  },
  headerText: {
    color: 'black', 
    fontSize: 30, 
    fontWeight: '600'
  },
  line: {
    width: SCREEN_WIDTH * 0.8905, 
    borderColor: '#D6D6D6', 
    borderWidth: 0.6, 
    borderStyle: 'solid', 
    marginTop: 10
  },
  flatlist: {
    position: 'absolute', 
    top: 140, 
    height: SCREEN_HEIGHT * 0.68075, 
    width: SCREEN_WIDTH * 0.8905, 
    left: SCREEN_WIDTH * 0.05089
  },
  inputView: {
    position: 'absolute', 
    width: SCREEN_WIDTH * 0.89058, 
    flexDirection: 'row', 
    bottom: 30, 
    right: SCREEN_WIDTH * 0.05089, 
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  plus: {
    fontSize: 30, 
    lineHeight: 30
  }
});

export default HomeScreen;
