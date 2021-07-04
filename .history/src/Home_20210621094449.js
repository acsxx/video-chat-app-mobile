import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {
  RTCView,
  mediaDevices,
  MediaStream,
  MediaStreamConstraints,
} from 'react-native-webrtc';

import uuid from 'react-native-uuid';
import {useAuth} from "./contexts/AuthContext"
import {useSocket} from "./contexts/SocketContext"

const HomeScreen = () =>  {
  
    //const {currentUser, name} = useAuth()
    const {setRoomID,createChat} = useSocket();

     function createRoom(){
      createChat()
    } 

    useEffect(()=>{
      //playVideo()
      console.log("home page");
    })  

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        <TouchableOpacity onPress={() => createRoom()}>
          <Text>CREATE ROOM</Text>
        </TouchableOpacity>
      </View>   
    );
}


export default HomeScreen