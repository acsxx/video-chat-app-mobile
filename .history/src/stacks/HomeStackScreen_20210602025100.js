import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from "../Home"

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
    return(
        <HomeStack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor: "#9dbeb9",
            }
        }}>
            <HomeStack.Screen name="Home" component={Home} options={{
          title: "Dashboard",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <FontAwesome5 name={"bars"} style={{marginLeft: 10}} size={20}/>
            </TouchableOpacity>
          )                 
        }}/>
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;