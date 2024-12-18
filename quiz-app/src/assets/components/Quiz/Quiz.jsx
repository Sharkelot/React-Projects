import { useState, useEffect } from "react";
import { resultInitialState } from "../../../constants";
import AnswerTimer from "../AnswerTimer/AnswerTimer";
import "./Quiz.scss";
import Result from "../Results/Result";

const Quiz = ({questions}) => {
    // Load initial states from localStorage or use defaults
    const [currentQuestion, setCurrentQuestion] = useState(() => {
        const saved = localStorage.getItem('currentQuestion');
        return saved ? parseInt(saved) : 0;
    });
    const [answerInput, setAnswerInput] = useState(() => {
        return localStorage.getItem('answerInput') || "";
    });
    const [answerIdx, setAnswerIdx] = useState(() => {
        const saved = localStorage.getItem('answerIdx');
        return saved ? parseInt(saved) : null;
    });
    const [answer, setAnswer] = useState(() => {
        const saved = localStorage.getItem('answer');
        return saved ? JSON.parse(saved) : null;
    });
    const [result, setResult] = useState(() => {
        const saved = localStorage.getItem('result');
        return saved ? JSON.parse(saved) : resultInitialState;
    });
    const [showResult, setShowResult] = useState(() => {
        return localStorage.getItem('showResult') === 'true';
    });

    // Save states to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('currentQuestion', currentQuestion);
        localStorage.setItem('answerInput', answerInput);
        localStorage.setItem('answerIdx', answerIdx);
        localStorage.setItem('answer', JSON.stringify(answer));
        localStorage.setItem('result', JSON.stringify(result));
        localStorage.setItem('showResult', showResult);
    }, [currentQuestion, answerInput, answerIdx, answer, result, showResult]);

    // Clear localStorage when quiz is completed or restarted
    const clearLocalStorage = () => {
        localStorage.removeItem('currentQuestion');
        localStorage.removeItem('answerInput');
        localStorage.removeItem('answerIdx');
        localStorage.removeItem('answer');
        localStorage.removeItem('result');
        localStorage.removeItem('showResult');
    };

    // Modify onTryAgain to clear localStorage
    const onTryAgain = () => {
        clearLocalStorage();
        setResult(resultInitialState);
        setShowResult(false);
        setCurrentQuestion(0);
        setAnswerInput("");
        setAnswerIdx(null);
        setAnswer(null);
    };

    // Get current question without filtering
    const currentQuestionData = questions[currentQuestion];
    const {question, choices, correctAnswer, type} = currentQuestionData;
    
    // Calculate total questions (including both types)
    const totalQuestions = questions.length;
    
    // Get current question number (1-based index)
    const currentQuestionNumber = currentQuestion + 1;

    const onAnswerClick = (choice, index) => {
        setAnswerIdx(index);
        if (choice === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    };

    const onInputChange = (e) => {
        setAnswerInput(e.target.value);
        setAnswer(e.target.value.toLowerCase() === correctAnswer.toLowerCase());
    };

    const onClickNext = () => {
        setAnswerIdx(null);
        setAnswerInput("");
        setResult((prev) => 
            answer
            ? {
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
            }
            : {
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1,
            }
        );
        if (currentQuestionNumber < totalQuestions) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }
    };

    const handleTimeUp = () => {
        setAnswerIdx(null);
        setResult((prev) => ({
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
        }));

        if (currentQuestionNumber < totalQuestions) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }
    };

    return (
        <div className="quiz-container">
            {!showResult ? (
                <>
                    <AnswerTimer 
                        key={currentQuestion}
                        duration={10} 
                        onTimeUp={handleTimeUp} 
                    />
                    <span className="active-question-no">{currentQuestionNumber}</span>
                    <span className="total-question">/{totalQuestions}</span>
                    <h2>{question}</h2>
                    {type === "MCQs" ? (
                        <ul>
                            {choices?.map((choice, index) => (
                                <li 
                                    key={choice}
                                    onClick={() => onAnswerClick(choice, index)}
                                    className={answerIdx === index ? 'selected-answer' : null}
                                >
                                    {choice}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <input
                            type="text"
                            placeholder="Type your answer here..."
                            value={answerInput}
                            onChange={onInputChange}
                            className="fib-input"
                        />
                    )}
                    <div className="footer">
                        <button 
                            onClick={onClickNext} 
                            disabled={type === "MCQs" ? answerIdx === null : !answerInput}
                        >
                            {currentQuestionNumber === totalQuestions ? "Submit" : "Next"}
                        </button>   
                    </div>
                </>
            ) : (
              <Result 
                totalQuestions={questions.length}
                result={result}
                onTryAgain={onTryAgain}
              />
            )}
        </div>
    );
};

export default Quiz;
