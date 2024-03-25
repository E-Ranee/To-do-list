import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TextInput, View, ScrollView } from 'react-native';
import { useState } from 'react';

import ListItem from './components/ListItem';
import Title from './components/Title';
import Heading from './components/Heading';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

export default function App() {

  // The current task about to be added to the to do list
  const [todo, setTodo] = useState('');
  // the list of all items on the to do list
  const [todoList, setTodoList] = useState([]);

  // When the button is pressed (the event happens)
  // Create a temporary list which is a copy of the full to do list
  // push (append) the current item to the copied list
  // replace the full list with the appended list
  const handleSubmit = (event) => {
    let tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList);
    setTodo("");
  }

  return (
    <View style={styles.container}>

      <View style={styles.container}>
        {/* Title */}
        <Title label={"To Do List"}></Title>
        {/* Heading */}
        <Heading label={"What needs to be done?"}></Heading>

        <InputField todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></InputField>

        <ScrollView style={styles.scrollable}>
          {/* List of current tasks*/}
          <TodoList todoList={todoList}></TodoList>
        </ScrollView>

      </View>

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#ece0ff',
    fontStyle: "italic",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  scrollable: {
    width: "100%",
  },
});
