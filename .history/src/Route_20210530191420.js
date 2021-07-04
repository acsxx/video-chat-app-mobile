import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"
import {createBottomNavigator} from "react-navigation-tabs"
import {createDrawerNavigator} from "react-navigation-drawer"

import Home from "./Home";
import Login from "./Login";

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
    }
})
const LoginStack = createStackNavigator({
    Login: {
        screen: Login,
    }
})

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginStack,

    },
    Home: HomeStack,
})

export default createAppContainer(AppNavigator)

