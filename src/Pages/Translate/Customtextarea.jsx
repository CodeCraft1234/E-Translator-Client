// import React, { useState } from 'react';

// const Customtextarea =({ onTextChange, value, suggestions }) => {
    
//         const [caretPosition, setCaretPosition] = useState(0);
      
//         const handleTextAreaChange = (e) => {
//           onTextChange(e.target.value);
//           setCaretPosition(e.target.selectionStart);
//         };
      
//         const handleSuggestionClick = (suggestion) => {
//           const newValue =
//             value.substring(0, caretPosition) +
//             suggestion +
//             value.substring(caretPosition);
//           onTextChange(newValue);
//           setCaretPosition(caretPosition + suggestion.length);
//         };
      
//         return (
//           <div style={{ position: "relative" }}>
//             <textarea
//               className="border w-full p-2"
//               value={value}
//               onChange={handleTextAreaChange}
//               cols="30"
//               rows="10"
//             ></textarea>
//             <ul
//               style={{
//                 position: "absolute",
//                 top: "100%",
//                 left: 0,
//                 zIndex: 999,
//                 background: "white",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//                 padding: "4px",
//                 boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               {suggestions.map((suggestion, index) => (
//                 <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         );
//       }


// export default Customtextarea;
import React, { useState } from 'react';

import Suggestions from "./Suggestions";

const Customtextarea = ({ onTextChange, value }) => {
    const [caretPosition, setCaretPosition] = useState(0);
    const [suggestions, setSuggestions] = useState([]);

    const handleTextAreaChange = (e) => {
        onTextChange(e.target.value);
        setCaretPosition(e.target.selectionStart);
    };

    const handleSuggestionClick = (suggestion) => {
        const newValue =
            value.substring(0, caretPosition) +
            suggestion +
            value.substring(caretPosition);
        onTextChange(newValue);
        setCaretPosition(caretPosition + suggestion.length);
        setSuggestions([]); // Clear suggestions after click
    };

    const handleInputChange = (text) => {
        // Simulated API call to get suggestions based on input text
        fetch(`http://localhost:5000/api/suggestions?text=${text}`)
            .then(response => response.json())
            .then(data => setSuggestions(data.suggestions))
            .catch(error => console.error('Error fetching suggestions:', error));
    };

    return (
        <div style={{ position: "relative" }}>
            <textarea
                className="border w-full p-2"
                value={value}
                onChange={handleTextAreaChange}
                cols="30"
                rows="10"
            ></textarea>
            <Suggestions
                inputText={value} // Pass value of textarea to Suggestion component
                onInputChange={handleInputChange} // Pass the handler function to fetch suggestions
                suggestions={suggestions} // Pass suggestions to Suggestion component
                onSuggestionClick={handleSuggestionClick} // Pass handler function to handle suggestion click
            />
        </div>
    );
};

export default Customtextarea;
