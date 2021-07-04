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
  
    const {currentUser, name} = useAuth()
    const {setRoomID,playVideo} = useSocket();

    function createRoom(){
      const id = 1234
      setRoomID(id);
    }

    useEffect(()=>{
      playVideo()
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