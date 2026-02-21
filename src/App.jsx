import {  useState } from "react";
import "./components/TextBox/text-box.style.scss";
import Timer from "./components/timer/timer.component";

const App = () => {
  const [text, setText] = useState("");
  const [startTimer, setStartTimer] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    if (!startTimer && value.length > 0) {
      setStartTimer(true);
    }
  };

    return (
      <div>
        <input type="text" className="form__input" id="name" placeholder="click here a letters"   value={text}
        onChange={handleChange} /> 
        <Timer start={startTimer} ></Timer> 
      </div>
      



      
    );
}

export default App;
