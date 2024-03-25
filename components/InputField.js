import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';

export default function InputField({ todo, setTodo, todoList, setTodoList }) {

    // When you ADD A NEW ITEM, we want to add a tuple to the array in the form [item, checkedState] where the default is false

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, { title: todo, done: false }])
        setTodo("")
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add new item here!"
                value={todo}
                onChangeText={text => setTodo(text)}
            // defaultValue={todo}
            />
            <Button
                style={styles.button}
                title="Add"
                color="#ece0ff"
                onPress={handleSubmit}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
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
});
