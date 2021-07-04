import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabScreens from "./screens/TabScreens"
import Profile from "./screens/Profile"
import Settings from "./screens/Settings"
import RootStackScreen from "./stacks/RootStackScreen"
import {useAuth} from "./contexts/AuthContext"
import {SocketProvider} from "./contexts/SocketContext"
import DrawerContent from "./screens/DrawerContent"
const Drawer = createDrawerNavigator();

export default function Route(){

    const {currentUser} = useAuth();

    return(
        <NavigationContainer>
            
                {
                    currentUser 
                    ?
                    (
                    <SocketProvider>
                        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                            <Drawer.Screen name="Home" component={TabScreens} />
                            <Drawer.Screen name="Profile" component={Profile} />
                            <Drawer.Screen name="Settings" component={Settings} />
                        </Drawer.Navigator>
                    </SocketProvider>
                    )   
                    : 
                    <RootStackScreen/>
                }
            
        </NavigationContainer>
    )
}

