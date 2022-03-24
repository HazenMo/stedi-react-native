import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import {login} from "./App.js";


export default function UselessTextInput(props) {
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
      <Button
        onPress={()=>sendCode(number1)}
        title="Send One Time Code"
        color="green"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="One Time Code"
        keyboardType="text"
      />
      <Button
        onPress={()=>checkCode(number1, number2, props)}
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

function sendCode(phoneNumber) {
  fetch(('https://dev.stedi.me/twofactorlogin/' + phoneNumber), {
    method: 'POST'
});
}

function checkCode(phoneNumber, oneTimePasscode, props) {
  fetch('https://dev.stedi.me/twofactorlogin', {
    method: 'POST',
    headers: {
      Accept:"application/text",
      "Content-Type":"application/text"
    },
    body: JSON.stringify({
      phoneNumber: phoneNumber, 
      oneTimePassword: oneTimePasscode,
    }),
  })
  .then(response => {
    const statusCode = response.status;
    const token = response.text();
    if (statusCode == 200) {
      props.setUserLoggedIn(true);
      // props.setEmail(email); 
    }
    console.log(statusCode);
    
    return token
  })
  .then(token => {console.log(token);
    fetch('https://dev.stedi.me/validate/' + token, {
      method: 'GET',
      headers: {
        Accept:"application/text",
        "Content-Type":"application/text"
      }
    })
    .then(response2 => {
    email = response2.text()
    return email;
  })
  .then(email => {props.setEmail(email);})
  })
  .catch(error => {
    console.log(error);
  })
}


