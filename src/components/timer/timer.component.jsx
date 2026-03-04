import { useState, useEffect , useRef } from "react";
import './timer.style.scss'

const Timer = ({start , onReset , setCounter , setText ,setStatus}) => {
    const INITIAL_TIME =60;
    const [time, setTime] = useState(INITIAL_TIME);
    const intervalRef = useRef(null);
    
    useEffect(() => {
        if (start) { 
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => { setTime((prev) => (prev > 0 ? prev - 1 : 0)); }, 1000);
        }
        else { 
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current); 
    }, [start]);
        const resetTime = () => {
            clearInterval(intervalRef.current);
            setTime(INITIAL_TIME);
            onReset(); 
            setCounter(0);
            setText("");
            setStatus(null);
        };

    return (
    <div className="timer">
        <h1> Time left : {time} sec</h1>
        <button className="Button" role="button" onClick={resetTime}>Reset</button>
    </div>
    );
};

export default Timer;
