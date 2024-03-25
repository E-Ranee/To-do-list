import { StyleSheet, View, Text, Button } from 'react-native';
import Todo from './Todo';

export default function TodoList({ todoList }) {
    return (
        <View>
            {todoList.map((item, index) => (
                <Todo key={index} todoItem={item}></Todo>
            ))}
        </View>
    );
}
