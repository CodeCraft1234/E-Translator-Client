import { useState } from "react";
import io from "socket.io-client";
import ChatTwo from "./ChatTwo";

const socket = io.connect("http://localhost:5000");

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
        <div className="flex flex-col items-center  border rounded-lg  px-10 py-10  ">
          <h3 className="text-2xl mb-4 text-white">Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUserName(event.target.value);
            }}
            className="w-full md:w-48  lg:w-full  h-10 border border-green-600 rounded px-2 mb-2"
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
            className="w-full md:w-48 lg:w-full h-10 border border-green-600 rounded px-2 mb-2"
          />
          <button
            onClick={joinRoom}
            className="w-72 md:w-48 h-12 bg-indigo-950 rounded-lg b"
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
