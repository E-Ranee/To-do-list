import { StyleSheet, View, Text, Button } from 'react-native';

import { CheckBox } from '@rneui/themed';
import { useState } from 'react';

export default function Todo({ todoItem }) {
    const [checked, setChecked] = useState(false);
    const toggleCheckbox = () => setChecked(!checked);

    return (
        <View style={styles.todoListContainer}>
            <Text style={styles.text}>{todoItem}</Text>
            <CheckBox
                checked={checked}
                onPress={toggleCheckbox}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
            />
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
});