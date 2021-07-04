import React from 'react';
import { View, Text, StyleSheet,Image, TextInput, TouchableOpacity } from 'react-native';
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
            <TextInput 
            placeholder = {"Email"}
            style={style.input}/>
          </View>
          <View style={style.item}>
            <TextInput 
            placeholder = {"Password"}
            style={style.input}/>
          </View>
          <View style={[style.item,{ flexDirection:"row" , justifyContent: 'flex-end'}]}>
            <Text style={{color:"#132c33"}}>Forgot your password ?</Text>
          </View>
          <View style={style.item}>
            <TouchableOpacity style={style.button}>
              <Text style={{fontSize:15, fontWeight:"bold"}}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={[style.item,{justifyContent: 'center', alignItems: 'center'}]}>
            <Text>Or</Text>
          </View>
          <View style={style.item}>
            <TouchableOpacity style={style.button}>
              <Text style={{fontSize:15, fontWeight:"bold"}}>Google</Text>
            </TouchableOpacity>
          </View>
          <View style={[style.item,{justifyContent: 'center', alignItems: 'center'}]}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity>
            <Text style={{color: "#126e82", marginTop:10}}>Sign Up!</Text>
            </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid gray',
  },
  header:{
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board:{
    marginTop: 30,
    paddingHorizontal: 30,
  },
  item:{
    marginBottom: 20,
  },
  input:{
    backgroundColor:"#f7f7f7",
    height: 35,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  button:{
    backgroundColor: "#51c4d3",
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  }
})

export default Login;