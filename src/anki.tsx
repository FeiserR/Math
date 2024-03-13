import TypeBox from "./typeBox";
import { useState } from "react";
import QuestionBox from "./questionBox";

function Anki() {

  const [input, setInput] = useState("");

  return (
    <div className="w-11">

      <QuestionBox input={input} setInput={setInput} />

      <TypeBox />
    </div>
  );
}

export default Anki;
