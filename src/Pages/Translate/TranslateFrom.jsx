// import { useEffect, useState, useRef } from "react";
// import { FaVolumeUp, FaExchangeAlt, FaCopy, FaCamera } from "react-icons/fa";
// import { MdKeyboardVoice } from "react-icons/md";
// import lang from "../Translate/Languages/languages";
// import toast from "react-hot-toast";
// import Tesseract from "tesseract.js";
// import { FaRegFilePdf, FaStar } from "react-icons/fa";
// import { FaUserGroup } from "react-icons/fa6";
// import { RiHistoryLine } from "react-icons/ri";
// import { PDFDocument } from 'pdf-lib';
// function Translator() {
//   const initialFromLanguage = "en-GB";
//   const initialToLanguage = "bn-IN";

//   const [fromText, setFromText] = useState("");
//   const [toText, setToText] = useState("");
//   const [fromLanguage, setFromLanguage] = useState(initialFromLanguage);
//   const [toLanguage, setToLanguage] = useState(initialToLanguage);
//   const [languages, setLanguages] = useState({});
//   const [recognition, setRecognition] = useState(null);
//   const [isRecording, setIsRecording] = useState(false);
//   const [translationsCache, setTranslationsCache] = useState({});
//   const [imageFile, setImageFile] = useState(null);
//   const [documentFile, setdocumentFile] = useState(null)
//   const [recognizedText, setRecognizedText] = useState("");
//   const [translatedText, setTranslatedText] = useState("");
//   const [translationHistory, setTranslationHistory] = useState([]);
//   // const [showHistoryModal, setShowHistoryModal] = useState(false);
//   const imageInput = useRef(null);
//   const documentInput = useRef(null)



//   useEffect(() => {
//     setLanguages(lang);
//     initializeRecognition();
//   }, []);

//   useEffect(() => {
//     handleTranslate();
//   }, [fromText, fromLanguage, toLanguage]);

//   useEffect(() => {
//     handleTranslateFromImage();
//     handleTranslateFromDocument();
//     fetchTranslationHistory();
//   }, [recognizedText]);

//   // Function to open/close the history modal
//   //  const toggleHistoryModal = () => {
//   //   setShowHistoryModal((prev) => !prev);
//   // };

//   const initializeRecognition = () => {
//     if ("webkitSpeechRecognition" in window) {
//       const recognition = new window.webkitSpeechRecognition();
//       recognition.continuous = true;
//       recognition.interimResults = true;
//       recognition.onresult = (event) => {
//         let transcripts = "";

//         for (let i = event.resultIndex; i < event.results.length; i++) {
//           if (event.results[i].isFinal) {
//             transcripts += event.results[i][0].transcript + " ";
//           }
//         }

//         if (transcripts.trim() !== "") {
//           setFromText((prevFromText) => prevFromText + transcripts.trim());

//           const spokenLanguage = event.results[0][0].lang;
//           if (
//             spokenLanguage &&
//             spokenLanguage.toLowerCase() === toLanguage.toLowerCase()
//           ) {
//             setToText(transcripts.trim());
//           }
//         }
//       };
//       setRecognition(recognition);
//     } else {
//       toast.error("Speech recognition not available in this browser");
//     }
//   };

//   const toggleRecognition = () => {
//     if (recognition) {
//       if (isRecording) {
//         recognition.stop();
//         setIsRecording(false);
//         toast.success("Voice recognition stopped");
//       } else {
//         recognition.start();
//         setIsRecording(true);
//         toast.success("Voice recognition started. Speak now...");
//       }
//     }
//   };

//   const handleTranslate = () => {
//     if (!fromText.trim()) {
//       return;
//     }

//     const cacheKey = `${fromText}_${fromLanguage}_${toLanguage}`;
//     if (translationsCache[cacheKey]) {
//       setToText(translationsCache[cacheKey]);
//       return;
//     }

//     let url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
//       fromText
//     )}&langpair=${fromLanguage}|${toLanguage}`;

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.responseData) {
//           const translatedText = data.responseData.translatedText;

//           setTranslationsCache((prevCache) => ({
//             ...prevCache,
//             [cacheKey]: translatedText,
//           }));

//           setToText(translatedText);

//           // save translation to history
//           saveTranslationToHistory({ fromText, toText, fromLanguage, toLanguage });

//         } else {
//           toast.error("Translation failed. Please try again.");
//         }
//       })
//       .catch(() => {
//         toast.error("An error occurred during translation.");
//       });
//   };




//   const handleTranslateFromImage = () => {
//     if (recognizedText.trim()) {
//       setFromText(recognizedText);
//     }
//   };
//   const handleTranslateFromDocument = () => {
//     if (recognizedText.trim()) {
//       setFromText(recognizedText);
//     }
//   };

//   const fetchTranslationHistory = () => {
//     fetch('http://localhost:5000/api/history')
//       .then((res) => res.json())
//       .then((data) => {
//         // Update translation history state
//         setTranslationHistory(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching translation history:', error);
//       });
//   };

//   const saveTranslationToHistory = (translation) => {
//     fetch('http://localhost:5000/api/history', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(translation),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // Update translation history state
//         setTranslationHistory((prevHistory) => [data, ...prevHistory]);
//       })
//       .catch((error) => {
//         console.error('Error saving translation to history:', error);
//       });
//   };



//   const utterText = (text, language) => {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = language;
//     synth.speak(utterance);
//   };

//   const copyContent = (text) => {
//     navigator.clipboard.writeText(text);
//     toast.success("Text copied to clipboard");
//   };

//   const handleReset = () => {
//     setFromText("");
//     setToText("");
//     setFromLanguage(initialFromLanguage);
//     setToLanguage(initialToLanguage);
//     setTranslatedText("");
//     setRecognizedText("");
//     setImageFile(null);
//     if (imageInput.current) {
//       imageInput.current.value = null;
//     }
//   };

//   const handleImageUpload = async (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       setImageFile(file);

//       try {
//         const {
//           data: { text },
//         } = await Tesseract.recognize(file, "eng");

//         if (text.trim() === "") {
//           console.error(
//             "No text found in the image. Please try again with a different image."
//           );
//           return;
//         }

//         const translationTargetLanguage = "bn-IN";
//         let url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
//           text
//         )}&langpair=eng|${translationTargetLanguage}&mt=1`;

//         fetch(url)
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.responseData) {
//               const translatedText = data.responseData.translatedText;
//               setTranslatedText(translatedText);
//             } else {
//               console.error("Translation failed. Please try again.");
//             }
//           })
//           .catch((error) => {
//             console.error("Error in translation:", error);
//           });

//         setRecognizedText(text);
//       } catch (error) {
//         console.error("Error in OCR:", error);
//       }
//     }
//   };
//   const handledocumentUpload = async (event) => {
//     console.log("FaRegFilePdf icon clicked");
//     const file = event.target.files[0];

//     if (file) {
//       setdocumentFile(file);

//       try {
//         const {
//           data: { text },
//         } = await Tesseract.recognize(file, "eng");

//         if (text.trim() === "") {
//           console.error(
//             "No text found in the document. Please try again with a different document."
//           );
//           return;
//         }

//         // Translate the extracted text
//         const translationTargetLanguage = "bn-IN";
//         let translationUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
//           text
//         )}&langpair=eng|${translationTargetLanguage}&mt=1`;

//         fetch(translationUrl)
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.responseData) {
//               const translatedText = data.responseData.translatedText;
//               setTranslatedText(translatedText); // Set translated text state
//             } else {
//               console.error("Translation failed. Please try again.");
//             }
//           })
//           .catch((error) => {
//             console.error("Error in translation:", error);
//           });

//         setRecognizedText(text); // Set extracted text state
//       } catch (error) {
//         console.error("Error in OCR:", error);
//       }
//     }
//   };


//   const handleExchangeClick = () => {
//     setFromText((prevFromText) => {
//       setToText(prevFromText);
//       return toText;
//     });

//     setFromLanguage((prevFromLanguage) => {
//       setToLanguage(prevFromLanguage);
//       return toLanguage;
//     });
//   };

//   return (
//     <div className="bg-[#5170ea] dark:bg-slate-800 flex items-center justify-center">
//       <div className="bg-base-300 p-8 rounded-lg shadow-md w-4/5 my-28">
//         <h1 className="text-2xl text-center font-bold mb-4">
//           Translation Board
//         </h1>

//         <div className="mb-4 flex items-center">
//           <div className="w-1/2 pr-2">
//             <label className="block text-sm font-medium">From Language:</label>
//             {/* <textarea
//               className="border w-full p-2"
//               // placeholder={
//               //   imageFile ? `${recognizedText}\n${fromText}` : "Type Here...."
//               // }
//               // placeholder={
//               //   imageFile
//               //     ? `${recognizedText}\n${fromText}`
//               //     : documentFile
//               //       ? `${documentFile.name}`
//               //       : "Type Here...."
//               // }

//               // value={imageFile ? recognizedText : fromText}
//               // onChange={(e) => setFromText(e.target.value)}
//               // cols="30"
//               // rows="10"
//             ></textarea> */}
//             {/* <textarea
//               className="border w-full p-2"
//               placeholder={
//                 imageFile
//                   ? `${recognizedText}\n${fromText}`
//                   : documentFile
//                     ? `Text from ${documentFile.name}`
//                     : "Type Here...."
//               }
//               value={imageFile ? `${recognizedText}\n${fromText}` : documentFile ? `${recognizedText}\n${fromText}` : fromText}
//               onChange={(e) => setFromText(e.target.value)}
//               cols="30"
//               rows="10"
//             ></textarea> */}
//             <textarea
//               className="border w-full p-2"
//               placeholder={
//                 imageFile
//                   ? "Text recognized from image..."
//                   : documentFile
//                     ? "Text from uploaded document..."
//                     : "Type Here...."
//               }
//               value={fromText}
//               onChange={(e) => setFromText(e.target.value)}
//               cols="30"
//               rows="10"
//             ></textarea>


//             <select
//               value={fromLanguage}
//               onChange={(e) => setFromLanguage(e.target.value)}
//               className="bg-gray-100 border border-gray-300 rounded-md w-full px-2 py-1"
//             >
//               {Object.keys(languages).map((code) => (
//                 <option key={code} value={code}>
//                   {languages[code]}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="w-1/2 pl-2">
//             <label className="block text-sm font-medium">To Language:</label>
//             <textarea
//               className="border w-full p-2"
//               value={toText}
//               onChange={(e) => setToText(e.target.value)}
//               cols="30"
//               rows="10"
//             ></textarea>
//             <select
//               value={toLanguage}
//               onChange={(e) => setToLanguage(e.target.value)}
//               className="bg-gray-100 border border-gray-300 rounded-md w-full px-2 py-1"
//             >
//               {Object.keys(languages).map((code) => (
//                 <option key={code} value={code}>
//                   {languages[code]}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* <div>
//           {imageFile && (
//             <div>
//               <img src={URL.createObjectURL(imageFile)} alt="Uploaded Image" />
//             </div>
//           )}
//         </div> */}
//         <div>
//           {imageFile && (
//             <div>
//               <img src={URL.createObjectURL(imageFile)} alt="Uploaded Image" />
//             </div>
//           )}
//           {documentFile && (
//             <div>
//               <p>Uploaded Document:</p>
//               <p>{URL.createObjectURL(documentFile)}</p>
//             </div>
//           )}
//         </div>

//         <div className="flex items-center justify-between">
//           <div>
//             <button
//               onClick={() => utterText(fromText, fromLanguage)}
//               className="text-[#4392d9]"
//             >
//               <div className="hover:bg-[#c1c7cd] rounded p-1">
//                 <FaVolumeUp size={20} />
//               </div>
//             </button>

//             <button
//               onClick={toggleRecognition}
//               className={`text-${isRecording ? "red" : "blue"}-500`}
//             >
//               <div className="hover:bg-[#c1c7cd] rounded p-1">
//                 <MdKeyboardVoice size={20} />
//               </div>

//             </button>

//             <button
//               onClick={() => imageInput.current.click()}
//               className="text-[#4392d9]"
//             >
//               <div className="hover:bg-[#c1c7cd] rounded p-1">
//                 <FaCamera size={20} />
//               </div>
//             </button>

//             <div>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 style={{ display: "none" }}
//                 ref={imageInput}
//               />
//             </div>

//             <button onClick={() => documentInput.current.click} className="text-[#4392d9]">
//               <div className="hover:bg-[#c1c7cd] rounded p-1">
//                 <FaRegFilePdf size={20} />
//               </div>
//               <input
//                 type="file"
//                 accept=".pdf"
//                 onChange={handledocumentUpload}
//                 style={{ display: "none" }}
//                 ref={documentInput}
//               />
//             </button>
//           </div>

//           <button
//             onClick={() => copyContent(fromText)}
//             className="text-[#4392d9] ml-5"
//           >
//             <div className="hover:bg-[#c1c7cd] rounded p-1">
//               <FaCopy size={20} />
//             </div>
//           </button>

//           <button onClick={handleExchangeClick} className="text-[#4392d9]">
//             <div className="hover:bg-[#c1c7cd] rounded p-1 mr-[80px]">
//               <FaExchangeAlt size={20} />
//             </div>
//           </button>

//           <button
//             onClick={() => copyContent(toText)}
//             className="text-[#4392d9]"
//           >
//             <div className="hover:bg-[#c1c7cd] rounded p-1">
//               <FaCopy size={20} />
//             </div>
//           </button>

//           <button
//             onClick={() => utterText(toText, toLanguage)}
//             className="text-[#4392d9] ml-5"
//           >
//             <div className="hover:bg-[#c1c7cd] rounded p-1">
//               <FaVolumeUp size={20} />
//             </div>
//           </button>
//         </div>

//         <div className="mt-5">
//           <button
//             onClick={handleReset}
//             className="btn  btn-outline border-0 border-[#4392d9] hover:bg-[#4392d9] hover:border-[#4392d9] border-b-4 hover:text-white"
//           >
//             <div>Reset</div>
//           </button>
//         </div>

//         {/* History Modal */}
//         {/* <Modal show={showHistoryModal} onClose={toggleHistoryModal}> */}
//         <div className="p-4">
//           <h2 className="text-lg font-bold mb-4">Translation History</h2>
//           <ul>
//             {translationHistory.map((item) => (
//               <li key={item._id}>
//                 <div>
//                   <strong>From:</strong> {item.fromText}
//                 </div>
//                 <div>
//                   <strong>To:</strong> {item.toText}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* </Modal> */}

//         <div className="flex items-center justify-center">
//           <div>
//             <button className="text-[#4392d9] ml-5">
//               <div className=" p-3 border border-[#4392d9] rounded-full">
//                 <RiHistoryLine size={40} />
//               </div>
//               <h2>History</h2>
//             </button>
//           </div>
//           <button className="text-[#4392d9] ml-5">
//             <div className="p-3 border border-[#4392d9] rounded-full">
//               <FaStar size={40} />
//             </div>
//             <h2>Rating</h2>
//           </button>
//           <button className="text-[#4392d9] ml-5">
//             <div className="p-3 border border-[#4392d9] rounded-full">
//               <FaUserGroup size={40} />
//             </div>
//             <h2>Feedback</h2>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Translator;


import { useEffect, useState, useRef } from "react";
import { FaVolumeUp, FaExchangeAlt, FaCopy, FaCamera, FaRegFilePdf } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import lang from "../Translate/Languages/languages";
import toast from "react-hot-toast";
import Tesseract from "tesseract.js";
import { PDFViewer, Document, Page } from "@react-pdf/renderer";
import { pdfjs } from "react-pdf";
// import pdfjsLib from 'pdfjs-dist';



function Translator() {
  const initialFromLanguage = "en-GB";
  const initialToLanguage = "bn-IN";

  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [fromLanguage, setFromLanguage] = useState(initialFromLanguage);
  const [toLanguage, setToLanguage] = useState(initialToLanguage);
  const [languages, setLanguages] = useState({});
  const [recognition, setRecognition] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [translationsCache, setTranslationsCache] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [documentFile, setDocumentFile] = useState(null);
  const [recognizedText, setRecognizedText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const imageInput = useRef(null);
  const documentInput = useRef(null); const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [historyFromText, setHistoryFromText] = useState("");
  const [historyToText, setHistoryToText] = useState("");
  const [translationHistory, setTranslationHistory] = useState([]);
  const [pdfText, setPdfText] = useState("");
  const [pdfNumPages, setPdfNumPages] = useState(null);
  const [pdfPageIndex, setPdfPageIndex] = useState(1);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [translatedContent, setTranslatedContent] = useState('');
  const [targetLanguage, setTargetLanguage] = useState(''); // Specify target language
  useEffect(() => {
    setLanguages(lang);
    initializeRecognition();
  }, []);

  useEffect(() => {
    handleTranslate();
  }, [fromText, fromLanguage, toLanguage]);

  useEffect(() => {
    handleTranslateFromImage();
    handleTranslateFromDocument();
    fetchTranslationHistory();
  }, [recognizedText]);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


  const initializeRecognition = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.onresult = (event) => {
        let transcripts = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            transcripts += event.results[i][0].transcript + " ";
          }
        }

        if (transcripts.trim() !== "") {
          setFromText((prevFromText) => prevFromText + transcripts.trim());

          const spokenLanguage = event.results[0][0].lang;
          if (
            spokenLanguage &&
            spokenLanguage.toLowerCase() === toLanguage.toLowerCase()
          ) {
            setToText(transcripts.trim());
          }
        }
      };
      setRecognition(recognition);
    } else {
      toast.error("Speech recognition not available in this browser");
    }
  };

  const toggleRecognition = () => {
    if (recognition) {
      if (isRecording) {
        recognition.stop();
        setIsRecording(false);
        toast.success("Voice recognition stopped");
      } else {
        recognition.start();
        setIsRecording(true);
        toast.success("Voice recognition started. Speak now...");
      }
    }
  };

  const handleTranslate = () => {
    if (!fromText.trim()) {
      return;
    }

    const cacheKey = `${fromText}_${fromLanguage}_${toLanguage}`;
    if (translationsCache[cacheKey]) {
      setToText(translationsCache[cacheKey]);
      return;
    }

    let url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      fromText
    )}&langpair=${fromLanguage}|${toLanguage}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.responseData) {
          const translatedText = data.responseData.translatedText;

          setTranslationsCache((prevCache) => ({
            ...prevCache,
            [cacheKey]: translatedText,
          }));

          setToText(translatedText);

          // save translation to history
          saveTranslationToHistory({ fromText, toText, fromLanguage, toLanguage });

        } else {
          toast.error("Translation failed. Please try again.");
        }
      })
      .catch(() => {
        toast.error("An error occurred during translation.");
      });
  };

  const handleTranslateFromImage = () => {
    if (recognizedText.trim()) {
      setFromText(recognizedText);
    }
  };

  const handleTranslateFromDocument = () => {
    if (recognizedText.trim()) {
      setFromText(recognizedText);
    }
  };

  const fetchTranslationHistory = () => {
    fetch('http://localhost:5000/api/history')
      .then((res) => res.json())
      .then((data) => {
        // Update translation history state
        setTranslationHistory(data);
      })
      .catch((error) => {
        console.error('Error fetching translation history:', error);
      });
  };

  const saveTranslationToHistory = (translation) => {
    fetch('http://localhost:5000/api/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(translation),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update translation history state
        setTranslationHistory((prevHistory) => [data, ...prevHistory]);
      })
      .catch((error) => {
        console.error('Error saving translation to history:', error);
      });
  };

  const utterText = (text, language) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    synth.speak(utterance);
  };

  const copyContent = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Text copied to clipboard");
  };

  const handleReset = () => {
    setFromText("");
    setToText("");
    setFromLanguage(initialFromLanguage);
    setToLanguage(initialToLanguage);
    setTranslatedText("");
    setRecognizedText("");
    setImageFile(null);
    if (imageInput.current) {
      imageInput.current.value = null;
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      setImageFile(file);

      try {
        const {
          data: { text },
        } = await Tesseract.recognize(file, "eng");

        if (text.trim() === "") {
          console.error(
            "No text found in the image. Please try again with a different image."
          );
          return;
        }

        const translationTargetLanguage = "bn-IN";
        let url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=eng|${translationTargetLanguage}&mt=1`;

        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            if (data.responseData) {
              const translatedText = data.responseData.translatedText;
              setTranslatedText(translatedText);
            } else {
              console.error("Translation failed. Please try again.");
            }
          })
          .catch((error) => {
            console.error("Error in translation:", error);
          });

        setRecognizedText(text);
      } catch (error) {
        console.error("Error in OCR:", error);
      }
    }
  };



  const handleExchangeClick = () => {
    setFromText((prevFromText) => {
      setToText(prevFromText);
      return toText;
    });

    setFromLanguage((prevFromLanguage) => {
      setToLanguage(prevFromLanguage);
      return toLanguage;
    });
  };
  const handleOpenPdf = () => {
    // Trigger the click event of the hidden file input
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  const handlePdfLoadSuccess = ({ numPages }) => {
    setPdfNumPages(numPages);
  };

  const handlePdfPageChange = (newPageIndex) => {
    setPdfPageIndex(newPageIndex);
  };


  const handlePdfTextExtraction = async () => {
    const fileReader = new FileReader();
    fileReader.onload = async function () {
      const arrayBuffer = this.result;
      const pdfData = new Uint8Array(arrayBuffer);
      const loadingTask = pdfjs.getDocument({ data: pdfData });
      loadingTask.promise.then(async (pdf) => {
        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const textItems = content.items.map(item => item.str);
          fullText += textItems.join(' ');
        }
        // Translate the extracted text
        const translationTargetLanguage = "bn-IN";
        let translationUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          fullText
        )}&langpair=eng|${translationTargetLanguage}&mt=1`;

        fetch(translationUrl)
          .then((res) => res.json())
          .then((data) => {
            if (data.responseData) {
              const translatedText = data.responseData.translatedText;
              setTranslatedText(translatedText); // Set translated text state
            } else {
              console.error("Translation failed. Please try again.");
            }
          })
          .catch((error) => {
            console.error("Error in translation:", error);
          });

        setRecognizedText(fullText); // Set extracted text state
      }).catch(error => {
        console.error('Error loading PDF:', error);
      });
    };
    fileReader.readAsArrayBuffer(imageFile);
  };
 

  const handleTranslateWebsite = async () => {
    if (!websiteUrl.trim()) {
      return;
    }

    try {
      const response = await fetch(websiteUrl);




      
      const htmlContent = await response.text();

      // Translate htmlContent using MyMemory Translation API
      const translationUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(htmlContent)}&langpair=en|${targetLanguage}`;
      const translationResponse = await fetch(translationUrl);
      const translationData = await translationResponse.json();
      const translatedText = translationData.responseData.translatedText;

      // Update state with translated content
      setTranslatedContent(translatedText);
    } catch (error) {
      console.error('Error translating website:', error);
    }
  };

  return (
    <div className="bg-[#5170ea] dark:bg-slate-800 flex items-center justify-center">
      <div className="bg-base-300 p-8 rounded-lg shadow-md w-4/5 my-28">
        <h1 className="text-2xl text-center font-bold mb-4">
          Translation Board
        </h1>

        <div className="mb-4 flex items-center">
          <div className="w-1/2 pr-2">
            <label className="block text-sm font-medium">From Language:</label>
            <textarea
              className="border w-full p-2"
              placeholder={
                imageFile
                  ? "Text recognized from image..."
                  : documentFile
                    ? "Text from uploaded document..."
                    : "Type Here...."
              }
              value={fromText}
              onChange={(e) => setFromText(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>

            <select
              value={fromLanguage}
              onChange={(e) => setFromLanguage(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md w-full px-2 py-1"
            >
              {Object.keys(languages).map((code) => (
                <option key={code} value={code}>
                  {languages[code]}
                </option>
              ))}
            </select>
          </div>

          <div className="w-1/2 pl-2">
            <label className="block text-sm font-medium">To Language:</label>
            <textarea
              className="border w-full p-2"
              value={toText}
              onChange={(e) => setToText(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
            <select
              value={toLanguage}
              onChange={(e) => setToLanguage(e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-md w-full px-2 py-1"
            >
              {Object.keys(languages).map((code) => (
                <option key={code} value={code}>
                  {languages[code]}
                </option>
              ))}
            </select>
          </div>
        </div>


        <div>
          {documentFile && (
            <div>
              <PDFViewer width={600} height={800}>
                <Document file={documentFile}>
                  <Page pageNumber={1} />
                </Document>
              </PDFViewer>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Enter website URL"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-4"
          />
          <select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mb-4"
          >
            <option value="en-GB">English</option>
            <option value="bn-IN">Bangla</option>
            {/* Add more language options as needed */}
          </select>
          <button
            onClick={handleTranslateWebsite}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Translate Website
          </button>
          {translatedContent && (
            <div className="mt-4">
              <h2 className="text-xl font-bold mb-2">Translated Content:</h2>
              <div dangerouslySetInnerHTML={{ __html: translatedContent }}></div>
            </div>
          )}
        </div>



        <div className="flex items-center justify-between">
          <div>
            <button
              onClick={() => utterText(fromText, fromLanguage)}
              className="text-[#4392d9]"
            >
              <div className="hover:bg-[#c1c7cd] rounded p-1">
                <FaVolumeUp size={20} />
              </div>
            </button>

            <button
              onClick={toggleRecognition}
              className={`text-${isRecording ? "red" : "blue"}-500`}
            >
              <div className="hover:bg-[#c1c7cd] rounded p-1">
                <MdKeyboardVoice size={20} />
              </div>

            </button>

            <button
              onClick={() => imageInput.current.click()}
              className="text-[#4392d9]"
            >
              <div className="hover:bg-[#c1c7cd] rounded p-1">
                <FaCamera size={20} />
              </div>
            </button>

            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
                ref={imageInput}
              />
            </div>

            {/* <button onClick={() => documentInput.current.click()} className="text-[#4392d9]">
              <div className="hover:bg-[#c1c7cd] rounded p-1">
                <FaRegFilePdf size={20} />
              </div>
              <input
                type="file"
                accept=".doc,.pdf"
                onChange={handleDocumentUpload}
                style={{ display: "none" }}
                ref={documentInput}
              />
            </button> */}
            <button onClick={handleOpenPdf} className="text-[#4392d9]">
              <div className="hover:bg-[#c1c7cd] rounded p-1">
                <FaRegFilePdf size={20} />
              </div>
            </button>
          </div>

          <button
            onClick={() => copyContent(fromText)}
            className="text-[#4392d9] ml-5"
          >
            <div className="hover:bg-[#c1c7cd] rounded p-1">
              <FaCopy size={20} />
            </div>
          </button>

          <button onClick={handleExchangeClick} className="text-[#4392d9]">
            <div className="hover:bg-[#c1c7cd] rounded p-1 mr-[80px]">
              <FaExchangeAlt size={20} />
            </div>
          </button>

          <button
            onClick={() => copyContent(toText)}
            className="text-[#4392d9]"
          >
            <div className="hover:bg-[#c1c7cd] rounded p-1">
              <FaCopy size={20} />
            </div>
          </button>

          <button
            onClick={() => utterText(toText, toLanguage)}
            className="text-[#4392d9] ml-5"
          >
            <div className="hover:bg-[#c1c7cd] rounded p-1">
              <FaVolumeUp size={20} />
            </div>
          </button>
        </div>

        <div className="mt-5">
          <button
            onClick={handleReset}
            className="btn  btn-outline border-0 border-[#4392d9] hover:bg-[#4392d9] hover:border-[#4392d9] border-b-4 hover:text-white"
          >
            <div>Reset</div>
          </button>
        </div>

        {/* <div className="flex items-center justify-center">
          <div>
            <button className="text-[#4392d9] ml-5">
              <div className=" p-3 border border-[#4392d9] rounded-full">
                <RiHistoryLine size={40} />
              </div>
              <h2>History</h2>
            </button>
          </div>
          <button className="text-[#4392d9] ml-5">
            <div className="p-3 border border-[#4392d9] rounded-full">
              <FaStar size={40} />
            </div>
            <h2>Rating</h2>
          </button>
          <button className="text-[#4392d9] ml-5">
            <div className="p-3 border border-[#4392d9] rounded-full">
              <FaUserGroup size={40} />
            </div>
            <h2>Feedback</h2>
          </button>
        </div> */}
        {showHistoryModal && (
          <div className="bg-base-100 dark:bg-slate-800 p-8 rounded-lg shadow-md overflow-y-auto max-h-[80vh]">
            <h2 className="text-xl font-bold mb-6 text-center border-b-2 border-[#5170ea] rounded">Translation History</h2>
            <ul>
              {translationHistory
                .slice(0)
                .reverse()
                .slice(0, 10)
                .map((entry, index) => (
                  <li key={index} className="mb-4">
                    <p className="font-semibold">From Text:</p>
                    <p>{entry.fromText}</p>
                    <p className="font-semibold">To Text:</p>
                    <p>{entry.toText}</p>
                  </li>
                ))}
            </ul>
            <button
              onClick={() => setShowHistoryModal(false)}
              className="btn btn-sm btn-outline border-0 border-[#4392d9] hover:bg-[#4392d9] hover:border-[#4392d9] border-b-4 hover:text-white"
            >
              Close
            </button>
          </div>
        )}
        {/* Hidden file input for uploading PDF */}
        <input
          type="file"
          accept="application/pdf"
          style={{ display: "none" }}
          onChange={handleImageUpload}
          ref={imageInput}
        />
        {/* Display PDF content */}
        {imageFile && (
          <div className="mt-5">
            <Document
              file={imageFile}
              onLoadSuccess={handlePdfLoadSuccess}
            >
              <Page pageNumber={pdfPageIndex} />
            </Document>
            {/* <div>
            Page {pdfPageIndex} of {pdfNumPages}
          </div>
          <button onClick={handlePdfTextExtraction}>Extract Text</button>
          <div>{pdfText}</div> */}
            <div>
              Page {pdfPageIndex} of {pdfNumPages}
            </div>
            <button onClick={handlePdfTextExtraction}>Extract Text</button>
            <div>{pdfText}</div> {/* Render the extracted text here */}

          </div>
        )}
      </div>
    </div>
  );
}

export default Translator;


