import React, { createContext, useState, useRef, useContext, useEffect } from "react";
import { io } from "socket.io-client";
import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals
} from 'react-native-webrtc';
import { useAuth } from "./AuthContext";
//const socket = io("https://video-meet-app.herokuapp.com");
const socket = io("http://localhost:5000");
const SocketContext = createContext();

export function useSocket() {
  return useContext(SocketContext);
}

const SocketProvider = ({ children }) => {

  /* useEffect(()=>{
    socket.on("connect",()=>{
      console.log("socket connected");
    })
  }) */ 
  //const name = "userName"
  function createChat(){
    socket.on("connect",(name)=>{
      console.log("socket connected = ", name);
    })
  }

  return (
    <SocketContext.Provider
      value={{
        createChat,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketProvider };
