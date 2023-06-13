import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chrono from "./Components/chrono";
import QuestionCard from "./Components/QuestionCard";
// import BasicExample from "./Components/question";
let Quiz = {
  Questions: [
    {
      question: "Qu'est ce que JavaScript",
      response: {
        "un language": false,
        "un framework": false,
        "un language de programmation": true,
      },
    },
    {
      question: "Qu'est ce que Three.JS",
      response: {
        "une librairie": true,
        librairie: false,
        "un language de programmation": false,
      },
    },
    {
      question: "Qu'est ce que React",
      response: {
        "un language": false,
        "un framework": true,
        "une ligne de code": false,
      },
    },
    {
      question: "Quelle commande utiliser pour lancer un projet react",
      response: {
        yarn: false,
        "yarn dev": true,
        "npm dev": false,
      },
    },
    {
      question: "Qu'est ce que NodesJS",
      response: {
        "un language": false,
        "Environnement de developpement": true,
        "une chaine de caratère": false,
      },
    },
  ],
  Points: 5,
  time: 16,
};

function App() {
  // State pour les question
  const [answers, setAnswers] = useState({});

  // State pour dire si le jeu est terminer ou non
  const [gameOver, setGameOver] = useState(false);

  // State pour les Resultats
  const [result, setResult] = useState({});

  //Commancer le quiz
  const [startQuiz, setStatesQuiz] = useState(false);

  // State
  const [Time, setTime] = useState(0);

  useEffect(() => {
    // Sesion pour le temps
    let endTime = sessionStorage.getItem("endTime");
    if (endTime) {
      setStatesQuiz(true);
      setTime(parseInt((endTime - new Date().getTime()) / 1000));
    }

// Session pour les questions
    let answers = sessionStorage.getItem("Answers");

    // console.log('Answers SessionStorage', JSON.parse(answers))
      if (answers) {
        setAnswers(JSON.parse(answers))
      }

  }, []);

  function UpdateAnswers(Question, response) {
    answers[Question] = response;
    sessionStorage.setItem("Answers", JSON.stringify(answers))
    setAnswers({ ...answers });
  }

  function getResults(){
    // Compteur des questions
    let compteur = 0;
    console.log("answers", answers);

    for (const count in answers) {
      // Nos reponse de l'utilsateur ......
      let result = answers[count];
      console.log("Mes reponse justes", result);
      // L'objet questions auquel l'utilisateur à repondu ......
      let findQuestion = Quiz.Questions.find((item) => item.question === count);
      console.log("les questions", findQuestion);
      // filter les reponses qui sont "true" dans les question (findQuestion).........
      let response = Object.entries(findQuestion.response)
        .filter((ele) => ele[1])
        .map((lem) => lem[0]);
      console.log("Les reponse justes", response);

      let pointByResponse = 1 / Quiz.Questions.length;

      let countUserResponse = 0;

      // Verifier si les reponse vrai de l'utilisateur sont inclurent dans tableau de bonne reponse
      response.forEach((elem) => {
        if (result.includes(elem)){
          countUserResponse += pointByResponse;
        } else {
          // verifie si countUserResponse n'es pas 0
          if (countUserResponse < 0) {
            countUserResponse -= pointByResponse;
          }
        }

        compteur += countUserResponse;
        console.log("compteur", countUserResponse);
      });
    }

    setResult({
      responseTotal: Math.ceil(compteur * Quiz.Points),
      percent:
        (Math.ceil(compteur * Quiz.Questions.length) * 100) /
        Quiz.Questions.length,
      point: Math.ceil(compteur * Quiz.Points) / Quiz.Questions.length,
    });
  }

  function submitQuiz() {
    setGameOver(true);
    getResults();
  }

  return startQuiz ? (
    gameOver ? (
      <div className="resultat">
        <p>
          Nombre de question : <span>{Quiz.Questions.length}</span>
        </p>
        <p>
          Nombre de question trouvées: <span>{result.responseTotal}</span>
        </p>
        <p>
          Pourcentage: <span>{result.percent}%</span>
        </p>
        <p>
          Nombre de point:<span>{result.point}</span>
        </p>

        <button
          type="submit"
          onClick={() => {
            sessionStorage.clear()
            setAnswers({}), setGameOver(false), setResult({});
            setStatesQuiz(false)

          }}
        >
          Retry
        </button>
      </div>
    ) : (
      <>
        <Chrono
          time={Time}
          submit={submitQuiz}
          questionLength={Quiz.Questions.length}
          answerslength={
            Object.values(answers).filter((item) => item.length > 0).length
          }
        />
        <div className="question">
          {Quiz.Questions.map((ele, i) => (
            <QuestionCard
              key={i}
              Question={ele.question}
              response={ele.response}
              update={UpdateAnswers}
              usersresponse={answers[ele.question]}
            />
          ))}
        </div>

        <button >Submit </button>
      </>
    )
  ) : (
    <button
      onClick={() => {
        sessionStorage.setItem(
          "endTime",
          new Date().getTime() + Quiz.time * 1000
        );
        setStatesQuiz(true);
        setTime(Quiz.time);
      }}
    >
      Commencer le Quiz
    </button>
  );
}
export default App;
