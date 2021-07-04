import React from "react";
import { View, Text, StyleSheet,SafeAreaView,Platform  } from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = () =>  {
    return (
      <SafeAreaView style={[style.body],{}}>
        <View style={style.header}>
          <Text>Dashboard</Text>
        </View>
      </SafeAreaView>
    );
}

const style = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: "#d8e3e7",
  },
  header: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#126e82",
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
})

export default HomeScreen