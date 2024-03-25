import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';

export default function InputField({ label }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add new item here!"
            // onChangeText={text => setTodo(text)}
            // defaultValue={todo}
            />
            <Button
                style={styles.button}
                title="Add"
                color="#ece0ff"
            // onPress={handleSubmit}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
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
