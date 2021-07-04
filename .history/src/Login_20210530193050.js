import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

class Login extends React.Component {
  render() {
    return (
      <View style={style.body}>
        <Text>Login</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    backgroundColor: "d8e3e7",
  } 

})

export default Login;