import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Button from './components/Button';
import { useState } from 'react';

export default function App() {

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <Text style={styles.title}>To do list</Text> 
        <Text>What needs to be done?</Text>
        <Text></Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add new item here!"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />
          <Button label="Add" />
        </View>

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
  title: {
    fontSize: 30,
  },
});
