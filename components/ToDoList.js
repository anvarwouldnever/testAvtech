import React from 'react';
import { FlatList } from 'react-native';
import ToDoItem from './ToDoItem';

const ToDoList = ({ items, onDelete, onDone }) => {
  const renderItem = ({ item }) => (
    <ToDoItem item={item} onDelete={onDelete} onDone={onDone} />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default ToDoList;