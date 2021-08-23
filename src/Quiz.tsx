import React, {useState} from "react";
import "./Styles/quiz.css";
import Questions from "./Components/__Qestions";

const Quiz = ():JSX.Element=> {
const [allAnswers, setAllAnswers] = useState<number>(0);
const [rightAnswer, setRightAnswer] = useState<number>(0);
const [wrongAnswer, setWrongAnswer] = useState<number>(0);

const resetQuiz = () =>{
    setAllAnswers(0)
    setRightAnswer(0)
    setWrongAnswer(0)
}

const correct = () =>{
    if(allAnswers >= 4){
        setAllAnswers(0)
        setRightAnswer(0)
        setWrongAnswer(0)
    }
    setAllAnswers(allAnswers + 1)
    setRightAnswer(rightAnswer + 1)
}
const incorrect = () =>{
    if(allAnswers >= 4){
        setAllAnswers(0)
        setRightAnswer(0)
        setWrongAnswer(0)
    }
    setAllAnswers(allAnswers + 1)
    setWrongAnswer(wrongAnswer + 1)
}
const h1Logic = allAnswers === 4 ? "":<h1 className='quiz-wrapper__title'>Выберите правильный ответ на вопрос</h1>;
    return(
        <>
        <main className='quiz-wrapper'>
            {h1Logic}
         <Questions
             allAnswers = {allAnswers}
             rightAnswer = {rightAnswer}
             wrongAnswer = {wrongAnswer}
             correct = {correct}
             incorrect = {incorrect}
             resetQuiz ={resetQuiz}
         />
       </main>



       </>
    )
}

export default Quiz;
