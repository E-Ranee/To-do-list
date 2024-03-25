import { StyleSheet, View, Text, Button } from 'react-native';
import Todo from './Todo';

export default function TodoList({ todoList, setTodoList }) {
    return (
        <View>
            {todoList.map((item, index) => (
                <Todo key={index} todoItem={item} todoList={todoList} setTodoList={setTodoList} index={index}></Todo>
            ))}
        </View>
    );
}
