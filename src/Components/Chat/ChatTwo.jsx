import { useEffect, useState, useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { IoMdSend } from "react-icons/io";

function ChatTwo({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (currentMessage.trim() !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.off("receive_message").on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  return (
    <div className="w-72 mt-32 mb-12 bg-white border border-gray-300 rounded-md shadow-lg">
      <div className="bg-blue-500 text-white text-center p-3">
        <p className="text-lg font-bold">Live Chat</p>
      </div>
      <div className="flex-grow overflow-y-auto p-4 space-y-2">
        <ScrollToBottom>
          {messageList.map((messageContent, index) => (
            <div
              key={index}
              className={`message ${
                username === messageContent.author ? "self-start" : "self-end"
              }`}
            >
              <div>
                <div className="flex justify-start items-center p-1 text-xs">
                  <p className="text-gray-500 font-semibold">
                    {messageContent.author}
                  </p>
                </div>
                <div
                  className={`message-content p-3 rounded-lg ${
                    username === messageContent.author
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <p>{messageContent.message}</p>
                </div>
                <div className="flex justify-end items-center p-1 text-xs">
                  <p id="time" className="mr-2 text-gray-500 font-light">
                    {messageContent.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </ScrollToBottom>
      </div>
      <div className="border-t gap-1 border-gray-300 flex items-center p-2">
        <input
          type="text"
          value={currentMessage}
          placeholder="Type your message..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
          className="flex-grow h-full border border-gray-400 rounded-l px-3 focus:outline-none focus:border-blue-500 transition duration-300"
        />
        <button
          onClick={sendMessage}
          className="h-6 w-8 bg-blue-500 text-white rounded-r flex items-center justify-center  transition duration-300"
        >
          <IoMdSend size={20} />
        </button>
      </div>
    </div>
  );
}

export default ChatTwo;
