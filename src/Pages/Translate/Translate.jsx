import { Helmet } from "react-helmet-async";
import TranslateFrom from "./TranslateFrom";

const Translate = () => {
  return (
    <div className="mt-16 text-white bg-[#031321]">
      <Helmet>
        <title> E-Translator | Translate</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <TranslateFrom />
    </div>
  );
};
export default Translate;
