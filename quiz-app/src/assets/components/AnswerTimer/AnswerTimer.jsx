import "./AnswerTimer.scss";
import { useEffect, useRef, useState } from "react";

function AnswerTimer({duration, onTimeUp}) {
    const [progressLoaded, setProgressLoaded] = useState(0);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        // Reset progress when component mounts
        setProgressLoaded(0);
        
        intervalRef.current = setInterval(() => {
            setProgressLoaded((prev) => {
                if (prev < 100) {
                    return prev + 1;
                }
                clearInterval(intervalRef.current);
                return prev;
            });
        }, duration * 10);
        
        return () => {
            clearInterval(intervalRef.current);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [duration]);

    useEffect(() => {
        if (progressLoaded === 100) {
            // Wait for the transition to complete before calling onTimeUp
            timeoutRef.current = setTimeout(() => {
                onTimeUp();
            }, 1000); // Match the transition-duration from CSS
        }
    }, [progressLoaded, onTimeUp]);
    
    return (
        <div className="answer-timer-container">
            <div 
                className="progress"
                style={{
                    width: `${progressLoaded}%`,
                    backgroundColor: `${
                        progressLoaded < 40 ? "lightgreen" :
                        progressLoaded < 70 ? "orange" : "red"
                    }`
                }}
            />
        </div>
    );
}

export default AnswerTimer;
