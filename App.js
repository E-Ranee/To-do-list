import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TextInput, View, ScrollView } from 'react-native';
import { useState } from 'react';

import Title from './components/Title';
import Heading from './components/Heading';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

export default function App() {
  // the list of all items on the to do list
  // expecting format [{title: "living room", done: false}]
  const [todoList, setTodoList] = useState([]);


  return (
    <View style={styles.container}>

      <View style={styles.container}>
        {/* Title */}
        <Title label={"To Do List"}></Title>
        {/* Heading */}
        <Heading label={"What needs to be done?"}></Heading>

        {/* Where you type in the item and then click add to add it to the list */}
        <InputField todoList={todoList} setTodoList={setTodoList}></InputField>

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
