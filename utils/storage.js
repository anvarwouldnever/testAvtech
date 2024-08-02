import AsyncStorage from '@react-native-async-storage/async-storage';

const TODOS_KEY = '@todos';

export const saveTodos = async (todos) => {
  try {
    const jsonValue = JSON.stringify(todos);
    await AsyncStorage.setItem(TODOS_KEY, jsonValue);
  } catch (e) {
    console.error('Failed to save todos:', e);
  }
};

export const loadTodos = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TODOS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to load todos:', e);
    return [];
  }
};