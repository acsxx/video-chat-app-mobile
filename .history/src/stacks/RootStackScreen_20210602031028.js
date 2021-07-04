import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "../Welcome"
import Login from "../Login"
import Register from "../Register"

const RootStack = createStackNavigator();

const RootStcakScreen = ({navigation}) => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Welcome" component={Welcome}/>
            <RootStack.Screen name="Login" component={Login}/>
            <RootStack.Screen name="Register" component={Register}/>
        </RootStack.Navigator>
    )
}

export default RootStcakScreen