import React,{useEffect} from "react";
import { View, Text, StyleSheet,SafeAreaView,Platform  } from 'react-native';
import {useAuth} from "./contexts/AuthContext"

const HomeScreen = () =>  {

    //const {currentUser, name} = useAuth()

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>   
    );
}


export default HomeScreen