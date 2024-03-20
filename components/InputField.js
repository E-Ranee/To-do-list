import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

export default function Button({ label }) {
    return (
      <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder={label}
            onChangeText={newText => setText(newText)}
            defaultValue={text}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
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
  });
