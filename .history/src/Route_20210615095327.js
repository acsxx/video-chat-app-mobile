import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabScreens from "./screens/TabScreens"
import RootStackScreen from "./stacks/RootStackScreen"
import {useAuth} from "./contexts/AuthContext"

const Drawer = createDrawerNavigator();

export default function Route(){

    const {currentUser} = useAuth();

    return(
        <NavigationContainer>
            
                {
                    currentUser 
                    ?
                    (<Drawer.Navigator>
                        <Drawer.Screen name="Home" component={TabScreens} />
                        <Drawer.Screen name="Logout" component={TabScreens} />
                    </Drawer.Navigator>)   
                    : 
                    <RootStackScreen/>
                }
            
        </NavigationContainer>
    )
}

