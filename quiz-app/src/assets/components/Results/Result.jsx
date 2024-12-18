import "./Result.scss";
import { useState, useEffect } from "react";

const Result = ({totalQuestions, result, onTryAgain}) => {

    const [name, setName] = useState("");
    const [highScores, setHighScores] = useState([]);
    const [showScores, setShowScores] = useState(false);

    // Initial high scores data
    const initialHighScores = [
        { name: "Player 1", score: 25, date: "2024-03-20" },
        { name: "Player 2", score: 20, date: "2024-03-20" },
        { name: "Player 3", score: 15, date: "2024-03-20" },
        { name: "Player 4", score: 10, date: "2024-03-20" },
        { name: "Player 5", score: 5, date: "2024-03-20" },
    ];

    useEffect(() => {
        const savedScores = localStorage.getItem("highScores");
        if (savedScores) {
            setHighScores(JSON.parse(savedScores));
        } else {
            // If no scores exist, set initial high scores
            setHighScores(initialHighScores);
            localStorage.setItem("highScores", JSON.stringify(initialHighScores));
        }
    }, []);

    const handleSave = () => {
        const newScore = {
            name,
            score: result.score,
            date: new Date().toLocaleDateString()
        };

        // Combine existing scores with new score and sort
        const allScores = [...highScores, newScore]
            .sort((a, b) => b.score - a.score) // Sort by score (highest first)
            .slice(0, 10); // Keep only top 10 scores

        setHighScores(allScores);
        setShowScores(true);
        localStorage.setItem("highScores", JSON.stringify(allScores));
    };

    return (  
        <div className="result">
            <h3>Result</h3>
            <p>Total Questions: <span>{totalQuestions}</span></p>
            <p>Correct Answers: <span>{result.correctAnswers}</span></p>
            <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>
            <p>Score: <span>{result.score}</span></p>
            <button onClick={onTryAgain}>Try again</button>
            {!showScores ? (
                <>
                    <h3>
                        Enter your name below<br/>to save your score!
                    </h3>
                    <div className="save-score-container">
                        <input 
                            type="text"
                            placeholder="Enter your name"
                            value={name} 
                            onChange={(evt) => setName(evt.target.value)}
                        />
                        <button 
                            className="save-score"
                            onClick={handleSave}
                            disabled={!name.trim()}
                        >
                            Save Score
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h3>High Scores</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Score</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {highScores.map((score, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{score.name}</td>
                                    <td>{score.score}</td>
                                    <td>{score.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default Result;
