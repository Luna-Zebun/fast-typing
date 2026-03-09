import {  useState , useRef } from "react";
import "./components/TextBox/text-box.style.scss";
import Timer from "./components/timer/timer.component";
import confetti from "canvas-confetti";

const quotes=[ 
  "Even the smallest light can guide you through the darkest night.",
  "A single hopeful thought can change the direction of an entire day.",
  "Hope is believing that tomorrow can be better, even if today was hard.",
  "When you choose hope, you choose possibility.",
  "Even broken wings can learn to fly again with hope.",
  "Hope reminds you that your story isn't finished yet.",]

const getRandomQuotes= () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
const App = () => {
  const [text, setText] = useState("");
  const [startTimer, setStartTimer] = useState(false);
  const [status, setStatus] = useState(null); 
  const [quote, setQuote] = useState(getRandomQuotes());
  const [counter, setCounter] = useState(0);
  const timerRef = useRef(null);
  const [speed, setSpeed] = useState(0);


const shootConfetti = () => {
  const myConfetti = confetti.create(undefined, {
    resize: true,
    useWorker: true,
  });

  myConfetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
};
const handleClick = () => {
  const randomArr = getRandomQuotes();
    setQuote(randomArr);
    setText("");
    setStatus(null);
    setCounter(0);
    setStartTimer(false);
    timerRef.current.resetTime();
    setSpeed(0)
};

const [isBackspace, setIsBackspace] = useState(false);
const handleKeyDown = (e) => {
  setIsBackspace(e.key === "Backspace");
};
const handleChange = (e) => {
  const value = e.target.value;
  setText(value);
  if (!isBackspace && !quote.startsWith(value)) {
    setStatus("wrong");
    setCounter(counter + 1);
  }
  else if (value === quote) { 
    setStatus("correct");
    shootConfetti();
    setStartTimer(false);
    timerRef.current.stopTimer();

    const seconds = timerRef.current.getTime(); 
    const characters = value.length;
    const wpm = Math.round((characters / 5) * (60 / seconds));
    setSpeed(wpm);

  }
  else {
    setStatus(null);
  }
  if (value.length > 0 ) {
    setStartTimer(true);
  }
}
    return (
      <div>
        
        <Timer ref={timerRef} start={startTimer}  onReset={() => setStartTimer(false) } setCounter={setCounter} setText={setText} setStatus={setStatus} setSpeed={setSpeed} ></Timer>
        <div className="App">
                  <div
          style={{
            width: "64px",
            height: "34px",
            borderRadius: "10%",
            margin: "-8% 0% -9% 84%",
            backgroundColor:
              status === "correct"
                ? "green"
                : status === "wrong"
                ? "red"
                : "#80808000",
            transition: "0.3s"
          }}
        />

          <h2>{counter} errors</h2>
          <h1>{quote}</h1>
          <input type="text" className="form__input" id="name" placeholder="click here a letters" onKeyDown={handleKeyDown } value={text} onChange={handleChange} disabled={status === "correct"}  /> 
          <button className="Button" role="button" onClick={handleClick} >Generate</button>
          <h3 style={{
                fontSize: "1.5rem",
                display: "inline-block",
                "margin-left": "45%",
                }}
          >your speed is {speed} wpm</h3>
        </div>
        
      </div>
    );
}

export default App;
