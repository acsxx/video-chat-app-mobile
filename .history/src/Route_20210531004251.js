import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"
//import {createBottomNavigator} from "react-navigation-tabs"
//import {createDrawerNavigator} from "react-navigation-drawer"

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

const AuthStack = createStackNavigator({
    Register: {
        screen: Register,
        navigationOptions:{
            headerShown: false
        }
    },
    Login: {
        screen: Login,
        navigationOptions:{
            headerShown: false
        }
    },
},
{
    initialRouteName: "Login"
}
)

export default createAppContainer(AuthStack)

