import { useState, useEffect } from "react";
import './timer.style.scss'

const Timer = ({start}) => {
    const INITIAL_TIME = 60;
    const [time, setTime] = useState(INITIAL_TIME);
    
    useEffect(() =>{
        if (!start) return;

        const interval = setInterval(() => {
            setTime((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [start]);

    return (
    <div className="timer">
        <h1> Time left : {time} sec</h1>
        {/* <button onClick={startTimer} >Start</button> */}
    </div>
    );
};

export default Timer;
