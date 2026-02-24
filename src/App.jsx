import {  useState } from "react";
import "./components/TextBox/text-box.style.scss";
import Timer from "./components/timer/timer.component";



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
  const [status, setStatus] = useState(null); // null | correct | wrong

  const [quote, setQuote] = useState(getRandomQuotes());
    const handleClick = () => {
    // shuffle array and pick random
    const randomArr = getRandomQuotes();
    setQuote(randomArr);
      setText("");
      setStatus(null);
  };


  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    if (!quote.startsWith(value)) {
      setStatus("wrong");
    }

    else if (value === quote) {
      setStatus("correct");
    }

    else {
      setStatus(null);
    }

    if (!startTimer && value.length > 0) {
      setStartTimer(true);
    }
  };


    return (
      <div>
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            margin: "0% 0% -12% 91%",
            backgroundColor:
              status === "correct"
                ? "green"
                : status === "wrong"
                ? "red"
                : "#80808000",
            transition: "0.3s"
          }}
        />
        <Timer start={startTimer} ></Timer> 
        <div className="App">
          <h1>{quote}</h1>
          <input type="text" className="form__input" id="name" placeholder="click here a letters"   value={text} onChange={handleChange} /> 
          <button className="Button" role="button" onClick={handleClick}>Generate</button>
        </div>


                
      </div>
    );
}

export default App;
