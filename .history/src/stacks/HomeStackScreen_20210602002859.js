import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Home"

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
    return(
        <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home}/>
    </HomeStack.Navigator>
    )
}

export default HomeStackScreen;