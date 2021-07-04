import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"
import {createBottomNavigator} from "react-navigation-tabs"
import {createDrawerNavigator} from "react-navigation-drawer"

import Home from "./Home";
import Login from "./Login";
/* 
const HomeStack = createStackNavigator({
   
        Home: Home,
 
})
const LoginStack = createStackNavigator({
        Login: Login,
 
}) */

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
    Login: {
        screen: Login,
        navigationOptions:{
            headerShown: false
        }
    },
},
{
    initialRouteName:"Login"
}
)

export default createAppContainer(AppNavigator)

