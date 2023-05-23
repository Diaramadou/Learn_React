import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chrono from "./Components/chrono";
import QuestionCard from "./Components/QuestionCard";
// import BasicExample from "./Components/question";
let Quiz = {
  Questions : [
    {question : "Qu'est ce que JavaScript",
     response : {
         "un language" : false,
         "un framework" : false,
         "un language de programmation": true
     }
    },
    {question : "Qu'est ce que Three.JS",
     response : {
         "une librairie" : true,
         "librairie" : false,
         "un language de programmation": false
     }
    },
    {question : "Qu'est ce que React",
     response : {
         "un language" : false,
         "un framework" : true,
         "une ligne de code": false
     }
    },
    {question : "Quelle commande utiliser pour lancer un projet react",
     response : {
         "yarn" : false,
         "yarn dev" : true,
         "npm dev": false
     }
    },
    {question : "Qu'est ce que NodesJS",
    response : {
      "un language" : false,
      "Environnement de developpement" : true,
      "une chaine de caratère": false
    }
  }
],
Points : 5,
Time : 5
}
function App() {
  
  function submitQuiz(){
    console.log('Quiz terminer')
  }
  
  const [answers, setAnswers] = useState({})
  useEffect(()=>{
    console.log(answers)
  },[answers])
  const [count, setCount] = useState(0);
  
  function UpdateAnswers(Question,response){
      answers[Question] = response
      setAnswers({...answers})
  }
  return (
    <>
      <Chrono Time={Quiz.Time} submit={submitQuiz()}/>
        <div className="QuestionCard">
             { 
               Quiz.Questions.map((ele, i)=> (

                 <QuestionCard  key={i} Question={ele.question} response={ele.response} update={UpdateAnswers} usersresponse={answers[ele.question]} />
               )
                
                )
             }
        </div>
    </>
  );
}
export default App;
