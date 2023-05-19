import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chrono from "./Components/chrono";
import QuestionCard from "./Components/QuestionCard";
// import BasicExample from "./Components/question";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Chrono />
      <QuestionCard>

      </QuestionCard>
    </>
  );
}

export default App;
