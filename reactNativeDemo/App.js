import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View, Image, Dimensions, ImageBackground} from 'react-native';

const Swidth = Dimensions.get("window").width;
const Sheight = Dimensions.get("window").height;

export default class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
      <ImageBackground style={styles.container} source={require('./images/background.jpg')} >
      {/* <View style={styles.header}> */}
      <Text style={styles.text}>LOGIN</Text>
      {/* </View> */}
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {  
    flex: 1,  
    alignSelf: 'stretch',
    width: Swidth,
    height: Sheight,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  header: {
    // fontSize: 50,
    // color: 'red',
    // fontWeight: 'bold',
    position: 'absolute',
    

  },
  text: {
    fontSize: 50,
    color: 'red',
    fontWeight: 'bold',

  }
});
