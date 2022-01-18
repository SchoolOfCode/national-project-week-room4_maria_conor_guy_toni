import { useEffect, useState } from "react";
import "./App.css";

function App() {
   const [timerData, setTimerData] = useState([]);

   async function getTimers() {
      const response = await fetch("/timers");
      let data = await response.json();
      setTimerData([...timerData, data]);
      console.log(data);
   }

   useEffect(() => getTimers());

   return (
      <div className="App">
         <header className="App-header">
            {/* <img src= className="App-logo" alt="logo" />  */}
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
         </header>
      </div>
   );
}

export default App;
