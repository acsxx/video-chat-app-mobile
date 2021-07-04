import "react-native-gesture-handler"
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import HomeStackScreen from "./src/stacks/HomeStackScreen"
import TabScreens from "./src/screens/TabScreens"
import RootStackScreen from "./src/screens/RootStackScreen"
const Drawer = createDrawerNavigator();
const App = () =>  {

  return (
     <NavigationContainer>
     <RootStackScreen/>
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabScreens} />
      </Drawer.Navigator>  */}

    </NavigationContainer> 
    
    
  );

}

export default App