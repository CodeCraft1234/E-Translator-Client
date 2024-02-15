import { Helmet } from "react-helmet-async";
import TranslateFrom from "./TranslateFrom";

const Translate = () => {
  return (
    <div className="mt-16 text-white bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b]">
      <Helmet>
        <title> E-Translator | Translate</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <TranslateFrom />
    </div>
  );
};
export default Translate;
