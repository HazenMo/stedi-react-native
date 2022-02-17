import React from "react";
import UselessTextInput from "./LoginPage.js";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function _onPress() {
  return UselessTextInput
}

function Setting() {
    return(
      <View>
      <Button
      title="Log In"
      onPress={_onPress}
    />
      </View>
    )
  }

export default Setting;