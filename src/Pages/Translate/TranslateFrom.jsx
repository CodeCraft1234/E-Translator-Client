import { useEffect, useState } from "react";
import { FaVolumeUp, FaExchangeAlt, FaCopy } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import lang from "../Translate/Languages/languages";
import toast from "react-hot-toast";

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

  useEffect(() => {
    setLanguages(lang);
    initializeRecognition();
  }, []);

  useEffect(() => {
    handleTranslate();
  }, [fromText, fromLanguage, toLanguage]);

  const initializeRecognition = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.onresult = (event) => {
        const transcripts = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join(" ");

        setFromText(transcripts);
        const spokenLanguage = event.results[0][0].lang;
        if (
          spokenLanguage &&
          spokenLanguage.toLowerCase() === toLanguage.toLowerCase()
        ) {
          setToText(transcripts);
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

  const handleTranslate = () => {
    if (!fromText.trim()) {
      toast.error("Please type something to translate.");
      return;
    }

    // Check if translation is available in cache
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

          // Update cache with the new translation
          setTranslationsCache((prevCache) => ({
            ...prevCache,
            [cacheKey]: translatedText,
          }));

          setToText(translatedText);
        } else {
          toast.error("Translation failed. Please try again.");
        }
      })
      .catch(() => {
        toast.error("An error occurred during translation.");
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
  };

  return (
    <>
      <div className="bg-[#5170ea] dark:bg-slate-800 flex items-center justify-center">
        <div className="bg-base-300 p-8 rounded-lg shadow-md w-4/5 my-28">
          <h1 className="text-2xl text-center font-bold mb-4">
            Translation Board
          </h1>

          <div className="mb-4 flex items-center">
            <div className="w-1/2 pr-2">
              <label className="block text-sm font-medium">
                From Language:
              </label>
              <textarea
                className="border w-full p-2"
                placeholder="Type Here...."
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

          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={() => utterText(fromText, fromLanguage)}
                className="text-blue-500"
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
            </div>

            <button
              onClick={() => copyContent(fromText)}
              className="text-purple-500 ml-5"
            >
              <div className="hover:bg-[#c1c7cd] rounded p-1">
                <FaCopy size={20} />
              </div>
            </button>

            <button onClick={handleExchangeClick} className="text-[#5170ea]">
              <div className="hover:bg-[#c1c7cd] rounded p-1 mr-5">
                <FaExchangeAlt size={20} />
              </div>
            </button>

            <button
              onClick={() => copyContent(toText)}
              className="text-purple-500"
            >
              <div className="hover:bg-[#c1c7cd] rounded p-1">
                <FaCopy size={20} />
              </div>
            </button>

            <button
              onClick={() => utterText(toText, toLanguage)}
              className="text-blue-500 ml-5"
            >
              <div className="hover:bg-[#c1c7cd] rounded p-1">
                <FaVolumeUp size={20} />
              </div>
            </button>
          </div>

          <div className="mt-5">
            <button
              onClick={handleReset}
              className="btn  btn-outline border-0 border-[#5170ea] hover:bg-[#5170ea] hover:border-[#5170ea] border-b-4 hover:text-white"
            >
              <div>Reset</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Translator;
