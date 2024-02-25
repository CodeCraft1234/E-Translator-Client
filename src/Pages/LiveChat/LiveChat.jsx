/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const LiveChat = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const openModal = () => {
    setIsModalOpen(true);

    // Send initial greeting message
    const greetingMessage = {
      sender: "bot",
      text: "Hello! welcome to etranslator Quick support Type help for support",
    };

    setChatMessages([greetingMessage]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    const userMessage = { sender: "user", text: userInput };
    const newMessages = [...chatMessages, userMessage];

    setChatMessages(newMessages);

    setUserInput("");

    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      const botMessage = { sender: "bot", text: botResponse };
      const updatedMessages = [...newMessages, botMessage];

      setChatMessages(updatedMessages);
    }, 1000);
  };

  const getBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput.includes("hi")) {
      return "Hello there! How can I help you?";
    } else if (lowerCaseInput.includes("help")) {
      return "no support team avabile write your issue here or email support@etranslator.com";
    } else if (lowerCaseInput.includes("chat kaj kore na")) {
      return "wait korun amra issue ta dekchi";
    } else {
      return "unable to understand wait for some time or email us support@etranslator.comn ";
    }
  };

  return (
    <div className="fixed z-10 bottom-7 right-7">
      <button className="text-2xl text-emerald-600" onClick={openModal}>
        <img
          className="w-28 ml-14"
          src="https://i.ibb.co/93XRbh3/messenger.png"
          alt=""
        />
        <h1 className="text-blue-200 bg-gradient-to-r rounded-lg text-2xl font-bold">
          Quick Support
        </h1>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-600 bg-opacity-75">
          <div className="flex items-end justify-end min-h-screen">
            <div className="bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b] p-4  w-96 rounded-lg">
              <div className="flex justify-end">
                <h1 className="w-96 text-xl font-semibold">Quick support</h1>
                <button
                  className="text-3xl text-gray-100 hover:text-orange-500 cursor-pointer"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
             <form className="bg-white p-2 rounded-lg" action="">
             <div className="mb-4 text-red-600 h-auto overflow-y-auto">
                {chatMessages.map((message, index) => (
                  <div key={index} className="flex">
                    {message.sender === "user" ? (
                      <div className="flex justify-end w-full">
                        
                        <div className="rounded-md p-2 max-w-xs bg-sky-800 text-white">
                          {message.text}
                          
                        </div>
                        <RxAvatar className="text-slate-800 " />
                      </div>
                    ) : (
                      <div className="flex justify-start w-full">
                      <FaRobot  className="text-slate-800 " />
                        <div className="rounded-md p-2 max-w-xs bg-green-800 text-white">
                          {message.text}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              </form>
              <div className="flex py-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={handleUserInput}
                  onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type help for support"
                  className="input text-black  input-bordered input-success w-full max-w-xs"
                />
                <button
                  className="px-4 bg-blue-500 text-white rounded"
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
           
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
