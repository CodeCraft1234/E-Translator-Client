import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Listen for incoming messages
    socket.on("chat message", (msg) => {
      // Append the received message to the list of messages
      setMessages([...messages, { text: msg, type: "received" }]);
      scrollToBottom();
    });

    // Clean up event listener when component unmounts
    return () => {
      socket.off("chat message");
    };
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault(); // Prevent form submission
    // Send message to the server
    if (newMessage.trim() !== "") {
      socket.emit("chat message", newMessage);
      // Append the sent message to the list of messages
      setMessages([...messages, { text: newMessage, type: "sent" }]);
      // Clear the input field after sending the message
      setNewMessage("");
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    // Scroll to the bottom of the chatbox
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-44 mx-auto max-w-xl">
      <div className="border rounded-md overflow-hidden shadow-md">
        <ul className="px-6 py-4 bg-gray-200 min-h-64 max-h-96 overflow-y-auto">
          {/* Render the list of messages */}
          {messages.map((msg, index) => (
            <li
              key={index}
              className={`mb-2 ${
                msg.type === "received" ? "text-left" : "text-right"
              }`}
            >
              <div
                className={`py-2 px-4 rounded-md ${
                  msg.type === "received"
                    ? "bg-white text-gray-800"
                    : "bg-sky-400 text-white"
                }`}
              >
                {msg.text}
              </div>
            </li>
          ))}
          <div ref={messagesEndRef}></div>
        </ul>
        {/* Form for typing and sending messages */}
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
