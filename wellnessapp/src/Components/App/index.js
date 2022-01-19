import { useEffect, useState } from "react";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import PageSubheading from "../PageSubheading";
import "./App.css";
import Stopwatch from "../Stopwatchapp";

function App() {
   const [timerData, setTimerData] = useState([]);

   async function getTimers() {
      const response = await fetch("/timers");
      let data = await response.json();
      setTimerData([...timerData, data.payload]);
      console.log(data.payload);
   }

   useEffect(() => {
      getTimers();
   }, []);

   console.log("this is the timerdata", timerData);

   return (
      <div className="App">
         <Logo />
         <PageHeading />
         <PageSubheading />
         <Stopwatch metric={timerData.title} />
      </div>
   );
}

export default App;
