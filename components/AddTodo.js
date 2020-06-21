import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        value={text}
        style={styles.input}
        placeholder="new todo.."
        onChangeText={(val) => setText(val)}
      />
      <Button
        onPress={() => {
          submitHandler(text);
          setText("");
        }}
        title="add Todo.."
        color="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
