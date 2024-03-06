import { useEffect, useState, useRef } from "react";
import {
  FaVolumeUp,
  FaExchangeAlt,
  FaCopy,
  FaGlobe,
  FaImages,
} from "react-icons/fa";
import { useContext } from "react";
import { MdKeyboardVoice } from "react-icons/md";
import lang from "../Translate/Languages/languages";
import toast from "react-hot-toast";
import Tesseract from "tesseract.js";
import { FaRegFilePdf, FaStar } from "react-icons/fa";
import { RiHistoryLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { pdfjs } from "react-pdf";
import { AuthContext } from "../../Security/AuthProvider";
import Feedback from "../../Components/Feedback/Feedback";
import MyRating from "../../Components/Rating/MyRating";
import Animation from "./Animation";
import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import Swal from "sweetalert2";

function Translator() {
  const { user } = useContext(AuthContext);
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
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [historyFromText, setHistoryFromText] = useState("");
  const [historyToText, setHistoryToText] = useState("");
  const [translationHistory, setTranslationHistory] = useState([]);
  const [pdfText, setPdfText] = useState("");
  const [showExtractPdf, setShowExtractPdf] = useState(false);
  const [showPdfText, setShowPdfText] = useState(false);

  const imageInput = useRef(null);
  const typingTimer = useRef(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setLanguages(lang);
    initializeRecognition();
    fetchTranslationHistory();
  }, []);

  useEffect(() => {
    handleTranslate();
  }, [fromText, fromLanguage, toLanguage]);

  useEffect(() => {
    handleTranslateFromImage();
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
          saveTranslationToHistory({
            fromText,
            toText: translatedText,
            fromLanguage,
            toLanguage,
          });
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
    fetch("http://localhost:5000/api/history")
      .then((res) => res.json())
      .then((data) => {
        const userTranslationHistory = data.filter(
          (entry) => entry.email === user.email
        );
        console.log(userTranslationHistory);
        setTranslationHistory(userTranslationHistory);
      })
      .catch((error) => {
        console.error("Error fetching translation history:", error);
      });
  };

  //deleted
  const handleDeleted = (id) => {
    fetch(`http://localhost:5000/api/history/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.deletedCount > 0) {
          toast.success("Deleted! Successfully");

          // Remove the deleted entry from the translation history
          setTranslationHistory((prevHistory) =>
            prevHistory.filter((entry) => entry._id !== id)
          );
        }
      })
      .catch((error) => {
        console.error("Error deleting translation history:", error);
      });
  };

  const saveTranslationToHistory = ({
    fromText,
    toText,
    fromLanguage,
    toLanguage,
  }) => {
    const textToSave = imageFile ? recognizedText : fromText;

    clearTimeout(typingTimer.current);

    typingTimer.current = setTimeout(() => {
      const translation = {
        fromText: textToSave,
        toText,
        fromLanguage,
        toLanguage,
        email: user.email,
      };

      fetch("http://localhost:5000/api/history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(translation),
     
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          setTranslationHistory((prevHistory) => [data, ...prevHistory]);
        })
        .catch((error) => {
          console.error("Error saving translation to history:", error);
        });
    }, 10000);
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
    setPdfText("");
    setShowExtractPdf(false);
    setShowPdfText(false);
    if (imageInput.current) {
      imageInput.current.value = null;
    }
    setShowInput("");
    setWebsiteLink("");
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
          console.error("No text found in the image. Please try again.");
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
    setFromText(toText);
    setToText(fromText);

    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
  };

  const openHistoryModal = () => {
    setShowHistoryModal(true);
    setHistoryFromText(imageFile ? recognizedText : fromText);
    setHistoryToText(toText);
    fetchTranslationHistory();
  };
  const handleOpenPdf = () => {
    if (imageInput.current) {
      imageInput.current.click();
    }
    if (showExtractPdf || showPdfText) {
      setShowExtractPdf(false);
      setShowPdfText(false);
    } else {
      setShowExtractPdf(true);
      setShowPdfText(true);
    }
  };

  const handlePdfTextExtraction = async () => {
    const fileReader = new FileReader();
    fileReader.onload = async function () {
      const arrayBuffer = this.result;
      const pdfData = new Uint8Array(arrayBuffer);
      const loadingTask = pdfjs.getDocument({ data: pdfData });
      loadingTask.promise
        .then(async (pdf) => {
          let fullText = "";
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            const textItems = content.items.map((item) => item.str);
            fullText += textItems.join(" ");
          }
          const translationTargetLanguage = "bn-IN";
          let translationUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
            fullText
          )}&langpair=eng|${translationTargetLanguage}&mt=1`;

          fetch(translationUrl)
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

          setRecognizedText(fullText);
        })
        .catch((error) => {
          console.error("Error loading PDF:", error);
        });
    };
    fileReader.readAsArrayBuffer(imageFile);
  };

  //
  const [websiteLink, setWebsiteLink] = useState("");
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleClick = () => {
    if (websiteLink) {
      let translatedLink = `https://translate.google.com/translate?sl=auto&tl=bn&u=${encodeURIComponent(
        websiteLink
      )}`;
      window.open(translatedLink, "_blank");
    }
  };

  // Translation suggestion

  const AxiosSecure = UseAxiosSecure();
  useEffect(() => {
    fetchSuggestions("");
  }, []);

  const fetchSuggestions = async () => {
    try {
      const response = await AxiosSecure.get("/api/suggestions");
      console.log(response.data);
      const suggestions = response.data.reduce((acc, curr) => {
        acc.push(...curr.words);
        return acc;
      }, []);

      setSuggestions(suggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  return (
    <div className="text-black bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b] flex items-center justify-center ">
      {/* <Animation></Animation> */}
      <div className="bg-base-300 lg:p-8 md:p-8 p-2 rounded-lg shadow-md lg:w-4/5 md:w-4/5 w-[410px] my-12 ">
        <h1 className="text-2xl text-center text-black font-bold mb-4">
          Translation Board
        </h1>
        <div className="mb-4 flex items-center">
          <div className="lg:w-1/2 md:w-1/2 w-[200px] pr-2">
            <label className="block text-sm font-medium p-1">From Language:</label>
            <textarea
              className="border w-full p-2"
              placeholder={
                imageFile ? `${recognizedText}\n${pdfText}` : "Type Here...."
              }
              value={
                imageFile
                  ? `${recognizedText}${pdfText}`
                  : `${fromText}${pdfText}`
              }
              onChange={(e) => {
                setFromText(e.target.value);
                fetchSuggestions(e.target.value);
              }}
              cols="30"
              rows="10"
            ></textarea>
            {fromText.trim() !== "" && (
              <ul className="absolute z-10 bg-white w-1/2 mt-1 rounded-b ">
                {suggestions
                  .filter((suggestion) =>
                    suggestion.toLowerCase().startsWith(fromText.toLowerCase())
                  )
                  .map((suggestion, index) => (
                    <li
                      key={index}
                      className="cursor-pointer py-1 px-2 hover:bg-gray-100"
                      onClick={() => {
                        setFromText(suggestion);
                        setSuggestions([]);
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
              </ul>
            )}

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
          <div className="lg:w-1/2 md:w-1/2 w-[200px] pl-2">
            <label className="block text-sm font-medium p-1">To Language:</label>
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
              className="text-[#4392d9]"
            >
              <div className="rounded p-1 relative group">
                <FaVolumeUp className="lg:text-xl md:text-xl text-sm hover:scale-150"></FaVolumeUp>
                <span className="absolute text-black p-1 rounded-md top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                  Speaker
                </span>
              </div>
            </button>
            <button
              onClick={toggleRecognition}
              className={`text-${isRecording ? "red" : "blue"}-500`}
            >
              <div className="rounded p-1 relative group">
                <MdKeyboardVoice className="lg:text-xl md:text-xl text-sm hover:scale-150"></MdKeyboardVoice>
                <span className="absolute text-black p-1 rounded-md top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                  Voice
                </span>
              </div>
            </button>
            <button
              onClick={() => imageInput.current.click()}
              className="text-[#4392d9]"
            >
              <div className="rounded p-1 relative group">
                <FaImages className="lg:text-xl md:text-xl text-sm hover:scale-150"></FaImages>
                <span className="absolute text-black p-1 rounded-md top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                  Image
                </span>
              </div>
            </button>
            <button className="text-[#4392d9]" onClick={handleOpenPdf}>
              <div className="rounded p-1 relative group">
                <FaRegFilePdf className="lg:text-xl md:text-xl text-sm hover:scale-150"></FaRegFilePdf>
                <span className="absolute text-black p-1 rounded-md top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                  PDF
                </span>
              </div>
            </button>
            <button className="text-[#4392d9]" onClick={toggleInput}>
              <div className="rounded p-1 relative group">
                <FaGlobe className="lg:text-xl md:text-xl text-sm hover:scale-150"></FaGlobe>
                <span className="absolute text-black p-1 rounded-md top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                  Website
                </span>
              </div>
            </button>
            {showInput && (
              <>
                <h2>Website Link</h2>
                <input
                  type="text"
                  className="p-1 rounded"
                  placeholder="Website Link...."
                  value={websiteLink}
                  onChange={(e) => setWebsiteLink(e.target.value)}
                />
                <button
                  className="bg-[#4392d9] p-4 rounded-full ml-[20px]"
                  onClick={handleClick}
                >
                  <FaArrowRightLong className="text-white" />
                </button>
              </>
            )}
          </div>
          <button
            onClick={() => copyContent(fromText)}
            className="text-[#4392d9] ml-5"
          >
            <div className="rounded p-1 relative group">
              <FaCopy className="lg:text-xl md:text-xl text-sm hover:scale-150"></FaCopy>
              <span className="absolute text-black p-1 rounded-md top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                Copy
              </span>
            </div>
          </button>
          <button onClick={handleExchangeClick} className="text-[#4392d9]">
            <div className="rounded p-1 relative group lg:mr-[110px] md:mr-[110px] mr-[86px]">
              <FaExchangeAlt className="lg:text-xl md:text-xl text-sm hover:scale-150"></FaExchangeAlt>
              <span className="absolute text-black p-1 rounded-md top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 lg:pr-[110px] md:pr-[110px] pr-[86px]">
                Exchange
              </span>
            </div>
          </button>
          <button
            onClick={() => copyContent(toText)}
            className="text-[#4392d9]"
          >
            <div className="rounded p-1 relative group">
              <FaCopy className="lg:text-xl md:text-xl text-sm hover:scale-150"></FaCopy>
              <span className="absolute text-black p-1 rounded-md top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                Copy
              </span>
            </div>
          </button>
          <button
            onClick={() => utterText(toText, toLanguage)}
            className="text-[#4392d9] ml-5"
          >
            <div className="rounded p-1 relative group">
              <FaVolumeUp className="lg:text-xl md:text-xl text-sm hover:scale-150"></FaVolumeUp>
              <span className="absolute text-black p-1 rounded-md top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">
                Speaker
              </span>
            </div>
          </button>
        </div>
        <div>
          <input
            type="file"
            accept="image/*, application/pdf"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            ref={imageInput}
          />
        </div>

        {showExtractPdf && (
          <button
            onClick={handlePdfTextExtraction}
            className="bg-[#4392d9] text-white font-semibold mt-4 px-4 py-2 rounded-md hover:bg-[#3182ce]"
          >
            Extract Text from PDF
          </button>
        )}
        {showPdfText && imageFile && recognizedText && (
          <div>
            <h2 className="text-xl mt-4 font-semibold">PDF Text</h2>
            <p className="border p-2 rounded-lg">{recognizedText}</p>
          </div>
        )}

        {imageFile && !showExtractPdf && (
          <div>
            <img src={URL.createObjectURL(imageFile)} alt="Uploaded Image" />
          </div>
        )}

        <div className="lg:mt-8 md:mt-5 mt-6 lg:mb-5 md:mb-5 mb-10">
          <button
            onClick={handleReset}
            className="btn btn-outline border-0 border-[#4392d9] hover:bg-[#4392d9] hover:border-[#4392d9] border-b-4 hover:text-white "
          >
            <div>Reset</div>
          </button>
        </div>

        <div className="flex items-center justify-center">
          <div>
            <button onClick={openHistoryModal} className="text-[#4392d9] ml-5">
              <div className=" p-3 border border-[#4392d9] rounded-full">
                <RiHistoryLine size={40} />
              </div>
              <h2>History</h2>
            </button>
          </div>
          {user && (
            <div>
              <button
                className="text-[#4392d9] ml-5"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                <div className="p-3 border border-[#4392d9] rounded-full">
                  <FaStar size={40} />
                </div>
                <h2 className="text-center">Rating</h2>
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box ">
                  {/* <WebRating ></WebRating> */}
                  <h3 className="font-bold text-lg">Have a moment?</h3>
                  <p className="py-4">How would you rate this product?</p>
                  <MyRating></MyRating>

                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          )}
          {user && (
            <div>
              <button
                className="text-[#4392d9] ml-5"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                <div className="p-3 border border-[#4392d9] rounded-full">
                  <FaUserGroup size={40} />
                </div>
                <h2 className="text-center">Feedback</h2>
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    Please share your feedback
                  </h3>

                  <Feedback></Feedback>

                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          )}
        </div>
      </div>

      {showHistoryModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-96 h-96 overflow-auto">
            <h2 className="text-xl font-bold mb-6 text-center border-b-2 border-[#5170ea] rounded">
              Translation History
            </h2>
            <ul>
              {translationHistory
                .slice(0)
                .reverse()
                .slice(0, 10)
                .map((entry, index) => (
                  <li key={index} className="mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">
                          <span className="text-[#4392d9]">
                            {entry.fromLanguage}
                          </span>
                          {" => "}
                          <span className="text-[#4392d9]">
                            {entry.toLanguage}
                          </span>
                        </p>
                        <p className="text-sm">{entry.fromText}</p>
                        <p className="text-sm text-[#4a5568]">
                          Translated: {entry.toText}
                        </p>
                      </div>
                    </div>
                    <button
                      className="underline"
                      onClick={() => handleDeleted(entry._id)}
                    >
                      Deleted
                    </button>
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
        </div>
      )}
    </div>
  );
}

export default Translator;
