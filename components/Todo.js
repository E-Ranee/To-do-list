import { StyleSheet, View, Text, Pressable } from 'react-native';

import { CheckBox } from '@rneui/themed';
import { useState } from 'react';

export default function Todo({ todoItem, todoList, setTodoList, index }) {
    const [checked, setChecked] = useState(false);
    const toggleCheckbox = () => setChecked(!checked);

    const deleteTodo = () => {
        // NOTE: THIS DOESN'T AFFECT CHECKBOXES. DELETING AN ITEM MOVES ALL THE ITEMS UP BY ONE BUT THE TICKED BOXES STAY IN THE SAME PLACE
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
                checkedColor="#ccb0d6"
            />
            <Text style={checked ? styles.crossedOut : styles.text}>{todoItem}</Text>
            <Pressable style={styles.button} onPress={deleteTodo}>
                <Text style={checked ? { color: "#ccb0d6" } : styles.text}>(x)</Text>
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
    crossedOut: {
        fontSize: 15,
        color: "#ccb0d6",
        textDecorationLine: "line-through"
    },
    button: {
        marginLeft: 40
    }
});