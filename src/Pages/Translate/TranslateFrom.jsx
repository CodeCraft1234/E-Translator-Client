import { useEffect, useState, useRef } from "react";
import { FaVolumeUp, FaExchangeAlt, FaCopy, FaCamera } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import lang from "../Translate/Languages/languages";
import toast from "react-hot-toast";
import Tesseract from "tesseract.js";
import { FaRegFilePdf, FaStar } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { RiHistoryLine } from "react-icons/ri";


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
  const [recognizedText, setRecognizedText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [translationHistory, setTranslationHistory] = useState([]); 
  // const [showHistoryModal, setShowHistoryModal] = useState(false);
  const imageInput = useRef(null);



  useEffect(() => {
    setLanguages(lang);
    initializeRecognition();
  }, []);

  useEffect(() => {
    handleTranslate();
  }, [fromText, fromLanguage, toLanguage]);

  useEffect(() => {
    handleTranslateFromImage();
    fetchTranslationHistory();
  }, [recognizedText]);

   // Function to open/close the history modal
  //  const toggleHistoryModal = () => {
  //   setShowHistoryModal((prev) => !prev);
  // };

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
                imageFile ? `${recognizedText}\n${fromText}` : "Type Here...."
              }
              value={imageFile ? recognizedText : fromText}
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
          {imageFile && (
            <div>
              <img src={URL.createObjectURL(imageFile)} alt="Uploaded Image" />
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

            <button className="text-[#4392d9]">
              <div className="hover:bg-[#c1c7cd] rounded p-1">
                <FaRegFilePdf size={20} />
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

        {/* History Modal */}
      {/* <Modal show={showHistoryModal} onClose={toggleHistoryModal}> */}
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Translation History</h2>
          <ul>
            {translationHistory.map((item) => (
              <li key={item._id}>
                <div>
                  <strong>From:</strong> {item.fromText}
                </div>
                <div>
                  <strong>To:</strong> {item.toText}
                </div>
              </li>
            ))}
          </ul>
        </div>
      {/* </Modal> */}

      <div className="flex items-center justify-center">
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
        </div>
      </div>
    </div>
  );
}

export default Translator;
