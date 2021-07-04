import React from "react";
import { View, Text, StyleSheet,SafeAreaView,Platform  } from 'react-native';
import {useAuth} from "./contexts/AuthContext"

const HomeScreen = () =>  {

    const {currentUser} = useAuth()
    
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        {console.log(currentUser)}
      </View>   
    );
}


export default HomeScreen