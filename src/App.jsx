import { useEffect} from "react";
import "./components/TextBox/text-box.style.scss";
import Timer from "./components/timer/timer.component";

const App = () => {

      const KeypressEvent = (e) =>{
        return(
            alert("you clicked :" + "  " + e.key)

        )
      }
        useEffect(()=> {
        document.addEventListener('keypress', KeypressEvent)
        },[])
  return (
    <div>
      <input type="text" className="form__input" id="name" placeholder="click here a letters" /> 
      <Timer ></Timer> 
    </div>
      
  );
}

export default App;
