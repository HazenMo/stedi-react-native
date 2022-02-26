import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import {login} from "./App.js";

const UselessTextInput = () => {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);


  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="Phone Number1"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="One Time Code"
        keyboardType="text"
      />
      <Button
        onPress={login()}
        title="Login"
        color="green"
      />
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;