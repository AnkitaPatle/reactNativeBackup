import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class Login extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to LOGIN Screen!</Text>
        <Button title="GO TO NEXT SCREEN" onPress={() => Actions.home()} />
      </View>
    );
  }
}
