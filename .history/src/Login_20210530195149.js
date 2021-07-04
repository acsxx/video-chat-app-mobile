import React from 'react';
import { View, Text, StyleSheet,Image, TextInput } from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

class Login extends React.Component {
  render() {
    return (
      <View style={style.body}>
        <View style={style.header}>
          <Text style={{fontSize:30, color:"#132c33"}}>Login</Text>
        </View>
        <View style={style.board}>
          <View style={style.item}>
            <TextInput style={style.input}/>
          </View>
        </View>
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
  },
  board:{
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    
  },
  item:{

  },
  input:{
    backgroundColor:"#f7f7f7",
    height: 50,
  }
})

export default Login;