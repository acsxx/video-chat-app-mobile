import React, { createContext, useState, useRef, useContext, useEffect } from "react";
import  io  from "socket.io-client";
//import Peer from "simple-peer";
import { useAuth } from "./AuthContext";

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
const videoConstraints = {
  height: window.innerHeight / 2,
  width: window.innerWidth / 2,
};

const SocketProvider = ({ children }) => {
  const [peers, setPeers] = useState([]);
  const [logs, setLogs] = useState([]);
  const [users, setUsers] = useState([]);
  const userVideo = useRef();
  const peersRef = useRef([]);
  const { name, currentUser } = useAuth();
  const [roomID, setRoomID] = useState("");
  const [mute, setMute] = useState(true);
  const [video, setVideo] = useState(true);
  const logsArr = [];
  const usersArr = useRef([]);

  //console.log(socket.id);

  /* useEffect(()=>{

     
        socket.emit("join room",  name);

        socket.on("all users", (name) => {
          console.log(name);
        });
      
          
          //console.log(users);

     
  }) */
  function playVideo(){
        
      /* socket.emit("join room",  name);

        socket.on("all users", (name) => {
          console.log(name);
        });
        console.log("play video"); */
        socket.on("connect", () =>{
          console.log("socket baglandı");
        })
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
