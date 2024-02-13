import { useEffect, useState, useRef, useContext } from "react";
import io from "socket.io-client";
import { AuthContext } from "../../Security/AuthProvider";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
      scrollToBottom();
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      const sentMessage = {
        text: newMessage,
        type: "sent",
        user: user.displayName,
        timestamp: new Date().toLocaleTimeString(),
      };
      socket.emit("message", sentMessage);
      setMessages([...messages, sentMessage]);
      setNewMessage("");
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-60 mx-auto max-w-xl">
      <div className="border rounded-md overflow-hidden shadow-md">
        <ul className="px-6 py-4 bg-gray-200 min-h-64 max-h-96 overflow-y-auto">
          {messages.map((msg, index) => (
            <li
              key={index}
              className={
                msg.type === "sent" ? "mb-2 text-right" : "mb-2 text-left"
              }
            >
              <div
                className={`flex items-center justify-${
                  msg.type === "sent" ? "end" : "start"
                } gap-3`}
              >
                <div
                  className={`py-2 px-4 rounded-md ${
                    msg.type === "sent"
                      ? "bg-sky-400 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  <span className="font-semibold">{msg.user}: </span>
                  {msg.text}
                  <div className="text-xs text-gray-500">{msg.timestamp}</div>
                </div>
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="w-8 h-8 rounded-full ml-2"
                />
              </div>
            </li>
          ))}
          <div ref={messagesEndRef}></div>
        </ul>
        {/* User Message Form */}
        <form
          onSubmit={sendMessage}
          className="flex items-center p-2 bg-gray-300"
        >
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="border w-full py-2 px-4 rounded-md focus:outline-none"
            placeholder="Type your message..."
          />
          <button type="submit" className="bg-sky-400 rounded-md p-2 ml-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;