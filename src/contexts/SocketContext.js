import React, {
  createContext,
  useState,
  useRef,
  useContext,
  useEffect,
} from "react";
import { io } from "socket.io-client";
import { useAuth } from "./AuthContext";
//import {mediaDevices} from "react-native-webrtc";
const connectionConfig = {
  jsonp: false,
  reconnection: true,
  reconnectionDelay: 100,
  reconnectionAttempts: 100000,
  transports: ["websocket"],
};
//const socket = io("https://video-meet-app.herokuapp.com", connectionConfig);
const socket = io("http://localhost:8000/", connectionConfig);
const SocketContext = createContext();

export function useSocket() {
  return useContext(SocketContext);
}

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

  useEffect( () => {
    
  });

  //const name = "userName"
  function createChat() {
    //console.log(socket)
    /* socket.on("info", (id) => {
      console.log("socket id = ", id);
    });  */
    socket.on("connect",() =>{
      console.log("connected")
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
