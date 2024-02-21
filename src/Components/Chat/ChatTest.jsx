import { useState } from "react";
import io from "socket.io-client";
import ChatTwo from "./ChatTwo";

const socket = io.connect("http://localhost:5001");

const ChatTest = () => {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {!showChat ? (
        <div className="flex flex-col items-center">
          <h3 className="text-2xl mb-4 text-white">Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUserName(event.target.value);
            }}
            className="w-72 md:w-48 h-10 border border-green-600 rounded px-2 mb-2"
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
            className="w-72 md:w-48 h-10 border border-green-600 rounded px-2 mb-2"
          />
          <button
            onClick={joinRoom}
            className="w-72 md:w-48 h-12 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Join A Room
          </button>
        </div>
      ) : (
        <ChatTwo socket={socket} username={userName} room={room} />
      )}
    </div>
  );
};

export default ChatTest;
