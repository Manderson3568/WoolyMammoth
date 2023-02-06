import TypingText from "../typingText/TypingText";
import "./TypingTextBoxStyles.css";
import { useState, useEffect } from "react";

const TypingTextBox = ({ sticky }) => {
  const [main, setMain] = useState("");
  const [span, setSpan] = useState("");

  useEffect(() => {
    const text = [
      { main: "problem solve.", span: "", stopPoint: 0 },
      { main: "work as part of a team.", span: "", stopPoint: 0 },
      { main: "learn new tech.", span: "", stopPoint: 0 },
      { main: "make awesome ", span: "shit.", stopPoint: 0 },
      { main: "play video games.", span: "", stopPoint: 5 },
      { main: "TTRPGs (D&D).", span: "", stopPoint: 0 },
    ];
    let mainInput = "";
    let spanInput = "";
    let mainI = 0;
    let spanI = 0;
    let textI = 0;
    let pause = 1;
    setInterval(() => {
      if (mainI < text[textI].main.length) {
        mainInput = mainInput + text[textI].main[mainI];
        setMain(mainInput); //adds next letter
        mainI++;
      } else if (spanI < text[textI].span.length) {
        spanInput = spanInput + text[textI].span[spanI]; // adds letter to span
        setSpan(spanInput);
        spanI++;
      } else if (spanI === text[textI].span.length && pause < 10) {
        pause++;
      } else if (
        spanI === text[textI].span.length &&
        spanInput.length > 0 &&
        pause >= 10
      ) {
        spanInput = spanInput.slice(0, spanInput.length - 1);
        setSpan(spanInput);
      } else if (
        mainI === text[textI].main.length &&
        mainInput.length > text[textI].stopPoint
      ) {
        mainInput = mainInput.slice(0, mainInput.length - 1);
        setMain(mainInput);
      } else {
        mainI = 0;
        spanI = 0;
        pause = 1;
        textI === text.length - 1 ? (textI = 0) : textI++;
      }
    }, 75);
  }, []);
  return (
    <div className={`typingTextBox section ${sticky ? "larger" : ""}`}>
      <p className="caps intro">Sydney full stack developer</p>
      <p className=" largeFont">
        I like to <br />
        <TypingText main={main} span={span} />
      </p>
    </div>
  );
};
export default TypingTextBox;
