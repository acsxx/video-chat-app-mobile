import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"
import {createBottomNavigator} from "react-navigation-tabs"
import {createDrawerNavigator} from "react-navigation-drawer"

import Home from "./Home";
import Login from "./Login";

const HomeStack = createStackNavigator({
        screen: Home,
 
})
const LoginStack = createStackNavigator({
        screen: Login,
 
})

const AppNavigator = createStackNavigator({
    HomeStack,
    LoginStack
})

export default createAppContainer(AppNavigator)

