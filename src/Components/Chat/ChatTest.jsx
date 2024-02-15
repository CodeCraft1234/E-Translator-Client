import { useState } from "react";
import io from "socket.io-client";
import './chat.css';
import ChatTwo from "./ChatTwo";

const socket = io.connect("http://localhost:5001");
console.log(socket);

const ChatTest = () => {
    const [userName, setUserName] = useState([]);
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState("");

    const joinRoom = () =>{
        if(userName !== "" && room !== ""){
            socket.emit("join_room", room)
            setShowChat(true);
        }
    }

    return (
        <div className="chat">
           {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : ( 
        <ChatTwo socket={socket} username={userName} room={room} />
       )}  
        </div>
    );
};

export default ChatTest;