import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

import { useState } from 'react';

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
        <Text style={styles.title}>To do list</Text>
        {/* Heading */}
        <Text>What needs to be done?</Text>
        <Text></Text>

        {/* Horizontal array of input field and add button */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add new item here!"
            onChangeText={text => setTodo(text)}
            defaultValue={todo}
          />
          <Button
            style={styles.button}
            title="Add"
            color="#ece0ff"
            onPress={handleSubmit}
          />
        </View>

        {/* List of current tasks*/}
        {todoList.map((item, index) => <Text key={index}>{item}</Text>)}

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 10,
    padding: 10,
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
  title: {
    fontSize: 30,
  },
});
