import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TextInput, View, ScrollView } from 'react-native';
import { useState } from 'react';

import Title from './components/Title';
import Heading from './components/Heading';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

// TODO: Make checkboxes behave when items are deleted
// TODO: Turn the todo list array from an array of strings to an array of tuples (item, checked = default false)
// TODO: Pass array of tuples to TodoList.js
// TODO: Pass array of tuples to Todo.js
// TODO: Use the second part of the tuple as the checked variable
// TODO: Make checking the box in Todo.js alter the state of the tuple on the todo list array

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

        {/* Where you type in the item and then click add to add it to the list */}
        <InputField todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></InputField>

        <ScrollView style={styles.scrollable}>
          {/* List of current tasks*/}
          <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
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
