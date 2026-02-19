import { useState, useRef, useEffect } from "react";
import './timer.style.scss'

const Timer = () => {
    const INITIAL_TIME = 60;
    const [time, setTime] = useState(INITIAL_TIME);
    const intervalRef = useRef(null);

    const startTimer = () => {
    clearInterval(intervalRef.current);
    setTime(INITIAL_TIME);

    intervalRef.current = setInterval(() => {
        setTime((prev) => {
        if (prev <= 1) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            return 0;
        }
        return prev - 1;
        });
    }, 1000);
    };

    
    useEffect(() => {
    return () => clearInterval(intervalRef.current);
    }, []);

    return (
    <div className="timer">
        <h1>{time} sec</h1>
        <button onClick={startTimer}>Start</button>
    </div>
    );
};

export default Timer;
