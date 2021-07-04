import React, { createContext, useState, useRef, useContext, useEffect } from "react";
import  io  from "socket.io-client";

const SocketContext = createContext();
const connectionConfig ={
  jsonp: false,
  reconnection: true,
  reconnectionDelay: 100,
  reaconnectionAttempts: 1000,
  transports:['websocket']
}
const socket = io("http://localhost:5000", connectionConfig);

export function useSocket() {
  return useContext(SocketContext);
}


const SocketProvider = ({ children }) => {
 
  function playVideo(){
        
      /* socket.emit("join room",  name);

        socket.on("all users", (name) => {
          console.log(name);
        });
        console.log("play video"); */
        socket.on("connect", () =>{
          console.log("socket baglandı");
        })
        console.log("123");
  }
    


  return (
    <SocketContext.Provider
      value={{
        playVideo
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketProvider };
