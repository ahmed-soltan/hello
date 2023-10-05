import { useEffect } from "react";
import "./style.css";

const GoogleTranslate = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {

      new window.google.translate.TranslateElement(      {
        pageLanguage:"en",
      },"google_translate_element");
    };

    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="google-translate-container">
     <div className="d-flex align-items-center justify-content-center">
       <div
        id="google_translate_element"
        className="google-translate-element"
      >
      </div>
     </div>
    </div>
  );
};

export default GoogleTranslate;
