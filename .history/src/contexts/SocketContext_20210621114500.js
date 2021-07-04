import React, { createContext, useState, useRef, useContext, useEffect } from "react";
import { io } from "socket.io-client";
import { useAuth } from "./AuthContext";
const connectionConfig = {
  jsonp: false,
  reconnection: true,
  reconnectionDelay: 100,
  reconnectionAttempts: 100000,
  transports: ['websocket'], 
 };
const socket = io("https://socket-server-acsx.herokuapp.com",connectionConfig);
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
    //console.log(socket)
     socket.on('connect', function(){
      console.log('Socket connected!');
    }); 
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
