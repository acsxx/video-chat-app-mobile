import React, { createContext, useState, useRef, useContext, useEffect } from "react";
import { io } from "socket.io-client";
//import Peer from "simple-peer";
import { useAuth } from "./AuthContext";

const socket = io("http://localhost:5000");
const SocketContext = createContext();


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

  useEffect(()=>{
    
          socket.emit("join room",  name);

          socket.on("all users", (name) => {
            console.log(name);
          });
          //console.log(users);

     
  })
    
  

  function createPeer(userToSignal, callerID, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socket.emit("sending signal", {
        userToSignal,
        callerID,
        name,
        signal,
      });
    });

    return peer;
  }

  function addPeer(incomingSignal, callerID, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on("signal", (signal) => {
      socket.emit("returning signal", { signal, callerID });
    });

    peer.signal(incomingSignal);

    return peer;
  }

  function muteUnmute() {
    //const enabled = userVideo.current.srcObject.getAudioTracks()[0].enabled;
    if (mute) {
      userVideo.current.srcObject.getAudioTracks()[0].enabled = false;
      setMute(false);
    } else {
      setMute(true);
      userVideo.current.srcObject.getAudioTracks()[0].enabled = true;
    }
  }
  function playStop() {
    let enabled = userVideo.current.srcObject.getVideoTracks()[0].enabled
     if(enabled){
      userVideo.current.srcObject.getVideoTracks()[0].enabled = false
      setVideo(false)
    }
    else{
      setVideo(true)
      userVideo.current.srcObject.getVideoTracks()[0].enabled = true
    } 
  }
  return (
    <SocketContext.Provider
      value={{
        setRoomID,
        userVideo,
        peers,
        roomID,
        playVideo,
        muteUnmute,
        mute,
        playStop,
        logs,
        users,
        video,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketProvider };
