import { useEffect, useState } from "react";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import PageSubheading from "../PageSubheading";
import QuoteText from "../QuoteText";
import "./App.css";
import Stopwatch from "../Stopwatchapp";
import Footer from "../Footer"

function App() {
   const [timerData, setTimerData] = useState([]);
   async function getTimers() {
      const response = await fetch("/timers");
      const data = await response.json();
      setTimerData([...timerData, data.payload]);
   }

   useEffect(() => {
      getTimers();
   }, []);

   console.log(timerData);

   return (
      <div className="App">
         <Logo />
         <PageHeading />
         <PageSubheading />
         <div className="timers">
            {timerData.length === 0 ? (
               <p>Loading</p>
            ) : (
               timerData[0].map(function (item, index) {
                  return <Stopwatch key={index} metric={item.title} />;
               })
            )}
         </div>
         <QuoteText/>
         <Footer/>
      </div>
   );
}

export default App;
