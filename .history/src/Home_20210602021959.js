import React from "react";
import { View, Text, StyleSheet,SafeAreaView,Platform  } from 'react-native';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = () =>  {
    return (
      /* <SafeAreaView style={[style.body]}>
        <View style={style.header}>
          <Text>Dashboard</Text>
        </View>
      </SafeAreaView> */
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    
    );
}

/* const style = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor: "#d8e3e7",
  },
  header: {  
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#126e82",
  },
}) */

export default HomeScreen