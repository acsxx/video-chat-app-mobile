import "react-native-gesture-handler"
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { View, Text } from 'react-native';
//import HomeStackScreen from "./src/stacks/HomeStackScreen"
//import TabScreens from "./src/screens/TabScreens"
//const Drawer = createDrawerNavigator();
import RootStackScreen from "./src/stacks/RootStackScreen"
import {AuthProvider} from "./src/contexts/AuthContext"

const App = () =>  {

  return (
     <NavigationContainer>
      <AuthProvider>
        <RootStackScreen/>
          {/* <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabScreens} />
          </Drawer.Navigator>  */}
      </AuthProvider>
    </NavigationContainer> 
    
    
  );

}

export default App