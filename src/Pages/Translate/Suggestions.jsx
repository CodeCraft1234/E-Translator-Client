// import React, { useState } from 'react';



// const Suggestion = () => {
//   const [inputText, setInputText] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   // Function to handle input change
//   const handleInputChange = (e) => {
//     const text = e.target.value;
//     setInputText(text);

//     // Simulated API call to get suggestions based on input text
//     fetch(`http://localhost:5000/api/suggestions?text=${text}`)
//       .then(response => response.json())
//       .then(data => setSuggestions(data.suggestions))
//       .catch(error => console.error('Error fetching suggestions:', error));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputText}
//         onChange={handleInputChange}
//         placeholder="Type something..."
//       />
//       <ul>
//         {suggestions.map((suggestion, index) => (
//           <li key={index}>{suggestion}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Suggestion;



// import React, { useState } from 'react';
// const Suggestion = ({ onInputChange, suggestions, onSuggestionClick }) => {


//   const [inputText, setInputText] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//     const handleInputChange = (e) => {
//         const text = e.target.value;
//         onInputChange(text);
//     };
//         // Simulated API call to get suggestions based on input text
//     fetch(`http://localhost:5000/api/suggestions?text=${text}`)
//       .then(response => response.json())
//       .then(data => setSuggestions(data.suggestions))
//       .catch(error => console.error('Error fetching suggestions:', error));
  


//     return (
//         <div>
//             <input
//                 type="text"
//                 value={inputText}
//                 onChange={handleInputChange}
//                 placeholder="Type something..."
//             />
//             <ul>
//                 {suggestions.map((suggestion, index) => (
//                     <li key={index} onClick={() => onSuggestionClick(suggestion)}>
//                         {suggestion}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Suggestion;





// import React, { useState, useEffect } from 'react';

// const Suggestion = ({ onInputChange, suggestions, onSuggestionClick }) => {
//   const [inputText, setInputText] = useState('');

//   const handleInputChange = (e) => {
//     const text = e.target.value;
//     onInputChange(text);

//     // Simulated API call to get suggestions based on input text
//     fetch(`http://localhost:5000/api/suggestions?text=${text}`)
//       .then(response => response.json())
//       .then(data => setSuggestions(data.suggestions))
//       .catch(error => console.error('Error fetching suggestions:', error));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputText}
//         onChange={handleInputChange}
//         placeholder="Type something..."
//       />
//       <ul>
//         {suggestions.map((suggestion, index) => (
//           <li key={index} onClick={() => onSuggestionClick(suggestion)}>
//             {suggestion}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Suggestion;





// import React, { useState, useEffect } from 'react';

// const Suggestion = ({ onInputChange, onSuggestionClick }) => {
//   const [inputText, setInputText] = useState('');
//     const [suggestions, setSuggestions] = useState([]);


//   const handleInputChange = (e) => {
//     const text = e.target.value;
//     onInputChange(text);

//     // Simulated API call to get suggestions based on input text
//     fetch(`http://localhost:5000/api/suggestions?text=${text}`)
//       .then(response => response.json())
//       .then(data => setSuggestions(data.suggestions))
//       .catch(error => console.error('Error fetching suggestions:', error));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputText}
//         onChange={handleInputChange}
//         placeholder="Type something..."
//       />
//       {suggestions && suggestions.length > 0 && (
//         <ul>
//           {suggestions.map((suggestion, index) => (
//             <li key={index} onClick={() => onSuggestionClick(suggestion)}>
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Suggestion;
