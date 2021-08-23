import React, {useState} from "react";
import "../Styles/quiz.css";

const Questions = ({...props}):JSX.Element => {
    const {allAnswers, rightAnswer, resetQuiz, correct, incorrect} = props

    const question1 = () => {
        return(
            <>
                <div className="quiz-title">Сколько будет 2х2?</div>
                <div onClick={incorrect} className="quiz-question">16</div>
                <div onClick={correct} className="quiz-question">4</div>
                <div onClick={incorrect} className="quiz-question">258</div>
                <div onClick={incorrect} className="quiz-question">666</div>
            </>
        )
    }
    const question2 = () => {
        return(
            <>
                <div className="quiz-title">Какую форму имеет планета Земля</div>
                <div onClick={incorrect} className="quiz-question">Я плоскоземельщик</div>
                <div onClick={incorrect} className="quiz-question">Шар</div>
                <div onClick={correct} className="quiz-question">Элипс</div>
                <div onClick={incorrect} className="quiz-question">Квадрат</div>
            </>
        )
    }
    const question3 = () => {
        return(
            <>
                <div className="quiz-title">Сколько на земле материков?</div>
                <div onClick={incorrect} className="quiz-question">7</div>
                <div onClick={incorrect} className="quiz-question">5</div>
                <div onClick={incorrect} className="quiz-question">14</div>
                <div onClick={correct} className="quiz-question">6</div>
            </>
        )
    }
    const question4 = () => {
        return(
            <>
                <div className="quiz-title">Как правильно варить кукурузу</div>
                <div onClick={incorrect} className="quiz-question">Я плоскоземельщик, просто еще раз хочу об этом заявить</div>
                <div onClick={correct} className="quiz-question">В кастрюле</div>
                <div onClick={incorrect} className="quiz-question">При помощи силы мысли</div>
                <div onClick={incorrect} className="quiz-question">Положить в холодильник вместе с огурцами</div>
            </>
        )
    }
const quizResult = () => {
        if (rightAnswer === 0) {
            return(
                <>
                    <h2>{`Ну ты гений, просто не признаный, у тебя нет правильных ответов`}</h2>
                    <button onClick={resetQuiz}>Начать заново</button>
                </>
            )
        }
        else  if(rightAnswer === 1){
            return(
                <>
                    <h2>{`Ты старался, но не очень, у тебя 25% правильных ответов`}</h2>
                    <button onClick={resetQuiz}>Начать заново</button>
                </>
            );
        }
        else  if(rightAnswer === 2){
            return(
                <>
                    <h2>{`А ты не так то и прост, у тебя 50% правильных ответов`}</h2>
                    <button onClick={resetQuiz}>Начать заново</button>
                </>
            );
        }
        else if (rightAnswer === 3){
            return(
                <>
                    <h2>{`Ты почти справился, у тебя 75% правильных ответов`}</h2>
                    <button onClick={resetQuiz}>Начать заново</button>
                </>
            );
        }
        else if (rightAnswer === 4){
            return(
                <>
                    <h2>{`А ты хорош, наверное и в школу ходил, у тебя 100% правильных ответов`}</h2>
                    <button onClick={resetQuiz}>Начать заново</button>
                </>
            );
        }

  }

const logic = () => {
   switch (allAnswers) {
    case 0:
    return question1()
    case 1:
    return question2()
    case 2:
    return question3()
    case 3:
    return question4()
    case 4:
    return quizResult()

           }
    }

return (
    <>
        {logic()}
    </>
)

}


export default Questions;
