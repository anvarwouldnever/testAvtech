import React from 'react';
import ToDoItem from './ToDoItem';
import Animated, { FadeInDown } from 'react-native-reanimated';

const ToDoList = ({ items, onDelete, onDone }) => {
  const renderItem = ({ item }) => (
    <ToDoItem item={item} onDelete={onDelete} onDone={onDone} />
  );

  return (
    <Animated.FlatList
      entering={FadeInDown.duration(400)}
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ToDoList;
