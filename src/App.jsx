import {  useState } from "react";
import "./components/TextBox/text-box.style.scss";
import Timer from "./components/timer/timer.component";



  const arr=[ 
    "Even the smallest light can guide you through the darkest night.",
    "A single hopeful thought can change the direction of an entire day.",
    "Hope is believing that tomorrow can be better, even if today was hard.",
    "When you choose hope, you choose possibility.",
    "Even broken wings can learn to fly again with hope.",
    "Hope reminds you that your story isn’t finished yet.",]
  const getRandomArr= () => {
  return arr[Math.floor(Math.random() * arr.length)];
};


const App = () => {
  const [text, setText] = useState("");
  const [startTimer, setStartTimer] = useState(false);

  const [arr, setArr] = useState(getRandomArr());
    const handleClick = () => {
    // shuffle array and pick random
    const randomArr = getRandomArr();
    setArr(randomArr);
  };


  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    if (!startTimer && value.length > 0) {
      setStartTimer(true);
    }
  };

    return (
      <div>
        <Timer start={startTimer} ></Timer> 
        <div className="App">
          <h1>{arr}</h1>
          <input type="text" className="form__input" id="name" placeholder="click here a letters"   value={text} onChange={handleChange} /> 
          <button class="Button" role="button" onClick={handleClick}>Generate</button>
        </div>
                
      </div>
      



      
    );
}

export default App;
