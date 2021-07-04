import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"
import {createBottomNavigator} from "react-navigation-tabs"
import {createDrawerNavigator} from "react-navigation-drawer"

import Home from "./Home";
import Login from "./Login";

const HomeStack = createStackNavigator({
    Home: {
        scree: Home,
        navigationOptions:{
            title: "Home Page"
        }
    }
})