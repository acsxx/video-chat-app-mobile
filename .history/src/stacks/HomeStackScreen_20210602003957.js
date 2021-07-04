import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from "../Home"

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} options={{
          title: "Dashboard",
          headerLeft: () => (
            <FontAwesome5 name={"bars"} style={{marginLeft: 10}} size={25}/>
          )
                      
        }}/>
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;