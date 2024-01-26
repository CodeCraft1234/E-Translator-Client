// /* eslint-disable no-unused-vars */
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const TranslateFrom = () => {
//   const [options, setOptions] = useState([]);
//   const [to, setTo] = useState('en');
//   const [from, setFrom] = useState('en');
//   const [input, setInput] = useState('');
//   const [output, setOutput] = useState('');

//   const translate = () => {
//     const params = new URLSearchParams();
//     params.append('q', input);
//     params.append('source', from);
//     params.append('target', to);
//     params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

//     axios.post('https://libretranslate.de/translate', params, {
//       headers: {
//         'accept': 'application/json',
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//     }).then(res => {
//       console.log(res.data);
//       // Assuming res.data is an object with a property named 'translatedText'
//       setOutput(res.data.translatedText);
//     }).catch(error => {
//       console.error('Translation error:', error);
//     });
//   };

//   useEffect(() => {
//     axios
//       .get('https://libretranslate.de/languages', {
//         headers: { accept: 'application/json' },
//       })
//       .then(res => {
//         console.log(res.data);
//         setOptions(res.data);
//       }).catch(error => {
//         console.error('Language options error:', error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <div className='flex justify-center my-6 gap-4' >
//         From ({from}) :
//         <select onChange={(e) => setFrom(e.target.value)}>
//           {options.map((opt) => (
//             <option key={opt.code} value={opt.code}>
//               {opt.name}
//             </option>
//           ))}
//         </select>
//         To ({to}) :
//         <select onChange={(e) => setTo(e.target.value)}>
//           {options.map((opt) => (
//             <option key={opt.code} value={opt.code}>
//               {opt.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className='flex justify-center mx-auto gap-6'>
//         <div>
//           <textarea
//             cols="50"
//             rows="8"
//             onInput={(e) => setInput(e.target.value)}
//           ></textarea>
//         </div>
//         <div>
//           <textarea cols="50" rows="8" value={output}></textarea>
//         </div>
//       </div>
//       <div>
//         <button className='flex justify-center mx-auto translate-btn translate-btn-accent' onClick={translate}>Translate</button>
//       </div>
//     </div>
//   );
// }

// export default TranslateFrom;
// Translator.js 


// import React, { useEffect, useState } from 'react';
// import './Translator.css';

// const TranslateFrom = () => {
//   const [inputFormat, setInputFormat] = useState('en');
//   const [outputFormat, setOutputFormat] = useState('hi');
//   const [translatedText, setTranslatedText] = useState('Translation');
//   const [inputText, setInputText] = useState('');
//   const [languageList, setLanguageList] = useState({});

//   useEffect(() => {
//     fetch("/language.json")
//       .then(res => res.json())
//       .then(data => setLanguageList(data))
//   }, []);

//   const handleReverseLanguage = () => {
//     const value = inputFormat;
//     setInputFormat(outputFormat);
//     setOutputFormat(value);
//     setInputText('');
//     setTranslatedText('Translation');
//   };

//   const handleRemoveInputText = () => {
//     setInputText('');
//     setTranslatedText('Translation');
//   };

//   const handleTranslate = async () => {
//     if (!inputText || !inputFormat || !outputFormat) return;

//     document.querySelector('.fa.fa-spinner.fa-spin').style.display = "block";
//     document.querySelector('.translate').style.display = 'none';

//     const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
//       inputText
//     )}&langpair=${inputFormat}|${outputFormat}`;

//     try {
//       const response = await fetch(url);
//       const result = await response.json();

//       if (result.responseStatus === 200 && result.responseData.translatedText) {
//         const translation = result.responseData.translatedText;
//         setTranslatedText(translation);
//       } else {
//         console.error('Translation error:', result.responseStatus);
//         setTranslatedText('Translation not available');
//       }
//     } catch (error) {
//       console.log(error);
//       setTranslatedText('Error during translation. Please try again.');
//     }

//     document.querySelector('.fa.fa-spinner.fa-spin').style.display = "none";
//     document.querySelector('.translate').style.display = 'block';
//   };

//   return (
//     <div className="flex items-center flex-col min-h-screen pt-[50px]">
//       <div className="row1 flex">
//         <select
//           value={inputFormat}
//           onChange={(e) => setInputFormat(e.target.value)}
//         >
//           {Object.keys(languageList).map((key, index) => {
//             const language = languageList[key];
//             return (
//               <option key={index} value={key}>
//                 {language.name}
//               </option>
//             );
//           })}
//         </select>
//         <svg
//           className='reversesvg'
//           onClick={handleReverseLanguage}
//           focusable="false"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//         >
//           <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
//         </svg>
//         <select
//           value={outputFormat}
//           onChange={(e) => {
//             setOutputFormat(e.target.value);
//             setTranslatedText('Translation');
//           }}
//         >
//           {Object.keys(languageList).map((key, index) => {
//             const language = languageList[key];
//             return (
//               <option key={index + 118} value={key}>
//                 {language.name}
//               </option>
//             );
//           })}
//         </select>
//       </div>
//       <div className="row2">
//         <div className="inputText">
//           <svg
//             className='removeinput'
//             style={{ display: inputText.length ? "block" : "none" }}
//             onClick={handleRemoveInputText}
//             focusable="false"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
//           </svg>
//           <textarea
//             type="text"
//             value={inputText}
//             placeholder='Enter Text'
//             onChange={(e) => setInputText(e.target.value)}
//           />
//         </div>
//         <div className="outputText">{translatedText}</div>
//       </div>
//       <div className="row3">
//         <button className='translate-btn' onClick={handleTranslate}>
//           <i className="fa fa-spinner fa-spin"></i>
//           <span className='translate'>Translate</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TranslateFrom;


import React, { useEffect } from "react";
import countries from "../../../public/data";

const Translate = () => {
  useEffect(() => {
    const fromText = document.querySelector(".from-text");
    const toText = document.querySelector(".to-text");
    const exchangeIcon = document.querySelector(".exchange");
    const selectTags = document.querySelectorAll("select");
    const icons = document.querySelectorAll(".row i");
    const translateBtn = document.querySelector("button");

    selectTags.forEach((tag, id) => {
      for (let country_code in countries) {
        let selected =
          id === 0
            ? country_code === "en-GB"
              ? "selected"
              : ""
            : country_code === "hi-IN"
            ? "selected"
            : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
      }
    });

    exchangeIcon.addEventListener("click", () => {
      let tempText = fromText.value;
      let tempLang = selectTags[0].value;
      fromText.value = toText.value;
      toText.value = tempText;
      selectTags[0].value = selectTags[1].value;
      selectTags[1].value = tempLang;
    });

    fromText.addEventListener("keyup", () => {
      if (!fromText.value) {
        toText.value = "";
      }
    });

    translateBtn.addEventListener("click", () => {
      let text = fromText.value.trim();
      let translateFrom = selectTags[0].value;
      let translateTo = selectTags[1].value;
      if (!text) return;
      toText.setAttribute("placeholder", "Translating...");
      let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          toText.value = data.responseData.translatedText;
          data.matches.forEach((match) => {
            if (match.id === 0) {
              toText.value = match.translation;
            }
          });
          toText.setAttribute("placeholder", "Translation");
        });
    });

    icons.forEach((icon) => {
      icon.addEventListener("click", ({ target }) => {
        if (!fromText.value || !toText.value) return;
        if (target.classList.contains("fa-copy")) {
          if (target.id === "from") {
            navigator.clipboard.writeText(fromText.value);
          } else {
            navigator.clipboard.writeText(toText.value);
          }
        } else {
          let utterance;
          if (target.id === "from") {
            utterance = new SpeechSynthesisUtterance(fromText.value);
            utterance.lang = selectTags[0].value;
          } else {
            utterance = new SpeechSynthesisUtterance(toText.value);
            utterance.lang = selectTags[1].value;
          }
          speechSynthesis.speak(utterance);
        }
      });
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="wrapper bg-gray-100 p-6 rounded-md">
        <div className="text-input mb-4">
          <textarea
            spellCheck="false"
            className="from-text border p-2 w-full"
            placeholder="Enter text"
          ></textarea>
          <textarea
            spellCheck="false"
            readOnly
            disabled
            className="to-text border p-2 w-full mt-2"
            placeholder="Translation"
          ></textarea>
        </div>
        <ul className="controls flex justify-between">
          <li className="row from flex items-center">
            <div className="icons">
              <i id="fromIcon" className="fas fa-volume-up"></i>
              <i id="fromCopy" className="fas fa-copy"></i>
            </div>
            <select className="border p-2">
              {/* Add options here */}
            </select>
          </li>
          <li className="exchange">
            <i className="fas fa-exchange-alt"></i>
          </li>
          <li className="row to flex items-center">
            <select className="border p-2">
              {/* Add options here */}
            </select>
            <div className="icons">
              <i id="toIcon" className="fas fa-volume-up"></i>
              <i id="toCopy" className="fas fa-copy"></i>
            </div>
          </li>
        </ul>
        <button className="mt-4 bg-blue-500 text-white p-2 rounded-md">
          Translate Text
        </button>
      </div>
    </div>
  );
};

export default Translate;
