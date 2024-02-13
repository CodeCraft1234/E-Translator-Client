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

  const sendMessage = (e, userType) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      const sentMessage = { text: newMessage, type: userType, user: user };
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* User Card */}
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
                  <img
                    src={msg.user?.photoURL}
                    alt={msg.user?.displayName}
                    className="w-8 h-8 rounded-full ml-2"
                  />
                  <div
                    className={`py-2 px-4 rounded-md ${
                      msg.type === "sent"
                        ? "bg-sky-400 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </li>
            ))}
            <div ref={messagesEndRef}></div>
          </ul>
          {/* User Message Form */}
          <form
            onSubmit={(e) => sendMessage(e, "sent")}
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

        {/* Admin Card */}
        <div className="border rounded-md overflow-hidden shadow-md">
          <ul className="px-6 py-4 bg-gray-200 min-h-64 max-h-96 overflow-y-auto">
            {messages.map((msg, index) => (
              <li key={index} className="mb-2 text-left">
                <div className={`flex items-center justify-start`}>
                  <img
                    src={
                      msg.type === "sent" ? msg.user?.photoURL : user?.photoURL
                    }
                    alt={
                      msg.type === "sent"
                        ? msg.user?.displayName
                        : user?.displayName
                    }
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div
                    className={`py-2 px-4 rounded-md ${
                      msg.type === "sent"
                        ? "bg-white text-gray-800"
                        : "bg-sky-400 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </li>
            ))}
            <div ref={messagesEndRef}></div>
          </ul>
          {/* Admin Reply Form */}
          <form
            onSubmit={(e) => sendMessage(e, "received")}
            className="flex items-center p-2 bg-gray-300"
          >
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="border w-full py-2 px-4 rounded-md focus:outline-none"
              placeholder="Admin, type your reply..."
            />
            <button type="submit" className="bg-sky-400 rounded-md p-2 ml-2">
              Reply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
