import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {connect} from "react-redux"

class CounterApp extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              width: 200,
              justifyContent: "space-around"
            }}
          >
            <TouchableOpacity onPress={this.props.increment()}>
              <Text style={styles.text}>Increase</Text>
            </TouchableOpacity>

            <Text style={styles.text}>{this.props.count}</Text>

            <TouchableOpacity onPress={this.props.decrement()}>
              <Text style={styles.text}>Decrease</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
}

const mapStateToProps = state => ({
  count: state.counterReducer.count
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterIncrement),
  decrement: () => dispatch(counterDecrement),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
    text: {
      fontSize: 20,
      textAlign: "center",
      color: "#fff",
      backgroundColor: "black"
    }
});