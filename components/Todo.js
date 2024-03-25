import { StyleSheet, View, Text, Pressable } from 'react-native';

import { CheckBox } from '@rneui/themed';
import { useState } from 'react';

export default function Todo({ todoItem, todoList, setTodoList, index }) {
    const [checked, setChecked] = useState(false);
    const toggleCheckbox = () => setChecked(!checked);

    const deleteTodo = () => {


        console.log(todoItem)
        setTodoList(todoList.filter((item, itemIndex) => itemIndex !== index))
    };

    return (
        <View style={styles.todoListContainer}>
            <CheckBox
                checked={checked}
                onPress={toggleCheckbox}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
            />
            <Text style={styles.text}>{todoItem}</Text>
            <Pressable style={styles.button} onPress={deleteTodo}>
                <Text>(x)</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    todoListContainer: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        // marginVertical: 5,
        // padding: 10,
        // marginVertical: 15,
    },
    text: {
        fontSize: 15,
    },
    button: {
        marginLeft: 40
    }
});