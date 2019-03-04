import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      isLoading: true
    };
  }
  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ dataArray: responseJson, isLoading: false });
        ToastAndroid.show("Data fetched", ToastAndroid.SHORT, 10);
        //   alert(JSON.stringify(dataArray[0].id));
      });
  }
  render() {
    return (
      <View>
        <Button title="POP" onPress={() => Actions.login()} />
        {this.state.isLoading == true && (
          <ActivityIndicator
            style={{ marginVertical: 100 }}
            size="large"
            color="#00ff00"
          />
        )}
        {this.state.isLoading == false && (
          <FlatList
            data={this.state.dataArray}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row" }}>
                <Text>{item.employee_name}</Text>
                <Text>{item.employee_salary}</Text>
                <Text>{item.employee_age}</Text>
              </View>
            )}
          />
        )}

        <TouchableOpacity
          style={{
            borderRadius: 50,
            height: 50,
            position: "absolute",
            backgroundColor: "cyan",
            width: 50,
            marginBottom: 10,
            marginTop: 100
          }}
        >
          <Text style={{ fontSize: 20, textAlign: "center", marginTop: 10 }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
