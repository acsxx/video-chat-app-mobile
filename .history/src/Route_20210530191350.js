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
        navigationOptions:{
            title: "Home Page"
        }
    }
})
const LoginStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions:{
            title: "Login Page"
        }
    }
})

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginStack,
        navigationOptions:{
            title: "Home Page"
        }
    },
    Home: HomeStack,
})

export default createAppContainer(AppNavigator)

