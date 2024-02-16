/* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { AiFillMessage } from "react-icons/ai";


// const LiveChat = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [chatMessages, setChatMessages] = useState([]);
//   const [userInput, setUserInput] = useState("");

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleUserInput = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSendMessage = () => {
//     const userMessage = { sender: "user", text: userInput };
//     const newMessages = [...chatMessages, userMessage];

//     setChatMessages(newMessages);

//     setUserInput("");

//     setTimeout(() => {
//       const botResponse = getBotResponse(userInput);
//       const botMessage = { sender: "bot", text: botResponse };
//       const updatedMessages = [...newMessages, botMessage];

//       setChatMessages(updatedMessages);
//     }, 1000);
//   };

//   const getBotResponse = (userInput) => {
//     const lowerCaseInput = userInput.toLowerCase();
//     if (lowerCaseInput.includes(" ")) {
//       return "Hello there! How can I help you?";
//     } else if (lowerCaseInput.includes("help")) {
//       return "Sure, please contact our support team at support@example.com";
//     } 
//     if (lowerCaseInput.includes("chat kaj kore na")) {
//       return "wait korun amra issue ta dekchi";
//     } 
    
//     else {
//       return "I'm sorry, I didn't understand. How can I assist you?";
//     }
//   };

//   return (
//     <div className="fixed bottom-7 right-7">
//       <button className="text-2xl text-emerald-600" onClick={openModal}>
//         <AiFillMessage  className="text-blue-700 text-center text-4xl hover:text-red-600"/> Chat Support
//       </button>

//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 overflow-auto bg-gray-600 bg-opacity-75">
//           <div className="flex items-end justify-end min-h-screen">
//             <div className="bg-blue-600 p-4  w-96 rounded-lg">
//               <div className="flex justify-end">
//                 <button
//                   className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer"
//                   onClick={closeModal}
//                 >
//                   &times;
//                 </button>
//               </div>
//               <div className="mb-4 text-red-600 h-auto overflow-y-auto">
//                 {chatMessages.map((message, index) => (
//                   <div key={index} className="flex">
//                     {message.sender === "user" ? (
//                       <div className="flex justify-end w-full">
//                         <div className="rounded-md p-2 max-w-xs bg-slate-300 text-black">
//                           {message.text}
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="flex justify-start w-full">
//                         <div className="rounded-md p-2 max-w-xs bg-gray-300 text-black">
//                           {message.text}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <div className="flex">
//                 <input
//                   type="text"
//                   value={userInput}
//                   onChange={handleUserInput}
//                   onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//                   placeholder="Type your message"
//                   className="input text-black  input-bordered input-success w-full max-w-xs"
//                 />
//                 <button
//                   className="px-4 py-2 bg-blue-500 text-white rounded"
//                   onClick={handleSendMessage}
//                 >
//                   Send
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LiveChat;



import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai";

const LiveChat = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const openModal = () => {
    setIsModalOpen(true);

    // Send initial greeting message
    const greetingMessage = {
      sender: "bot",
      text: "Hello! welcome to etranslator chat support Type help for support",
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
        <AiFillMessage className="text-blue-700 text-center text-4xl hover:text-red-600" /> Chat Support
      </button>
   
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-600 bg-opacity-75">
          <div className="flex items-end justify-end min-h-screen">
            <div className="bg-blue-600 p-4  w-96 rounded-lg">
              <div className="flex justify-end">
                <h1 className="w-96 font-bold">E-Transloator support</h1>
                <button
                  className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
              <div className="mb-4 text-red-600 h-auto overflow-y-auto">
                {chatMessages.map((message, index) => (
                  <div key={index} className="flex">
                    {message.sender === "user" ? (
                      <div className="flex justify-end w-full">
                        <div className="rounded-md p-2 max-w-xs bg-slate-300 text-black">
                          {message.text}
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-start w-full">
                        <div className="rounded-md p-2 max-w-xs bg-gray-300 text-black">
                          {message.text}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  value={userInput}
                  onChange={handleUserInput}
                  onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message"
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
