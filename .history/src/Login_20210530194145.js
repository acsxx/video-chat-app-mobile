import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

class Login extends React.Component {
  render() {
    return (
      <View style={style.body}>
        <View style={style.header}>
          <Text style={{fontSize:30, color:"red"}}>Login</Text>
        </View>
        <View style={style.logo}></View>
        <View style={style.board}></View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    backgroundColor: "#d8e3e7",
    flex:1,
  },
  header:{
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  } 

})

export default Login;