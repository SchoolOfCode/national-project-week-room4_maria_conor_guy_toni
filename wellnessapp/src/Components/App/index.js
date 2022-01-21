import { useEffect, useState } from "react";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import PageSubheading from "../PageSubheading";
import QuoteText from "../QuoteText";
import "./App.css";
import Stopwatch from "../StopWatch";
import Footer from "../Footer";

function App() {

   // we are saving the data from our timers database into a state
   const [timerData, setTimerData] = useState([]);
   // fetch the data and setting the timer data
   async function getTimers() {
      const response = await fetch("/timers");
      const data = await response.json();
   //we reecive the data
      setTimerData([...timerData, data.payload]);
   }
   // running the useEffect function to get our timers information
   useEffect(() => {
      getTimers();
   }, []);

   console.log(timerData);


   return (
      <div className="App">
         <Logo />
         <div className="headers"> 
            <PageHeading /> 
            <PageSubheading />
         </div>
         {/* going through the timers api returned array data and picking the values to display on stopwatch using map */}

         <div className="timers">
         
            {timerData.length === 0 ? (
               <p>Loading</p>
            ) : (
               timerData[0].map(({ title, warning, overdue }, index) => (
                  <Stopwatch
                     key={index}
                     metric={title}
                     warning={warning}
                     overdue={overdue}
                  />
               ))
            )}
         </div>
 
         <div className="quote__container">
            <QuoteText />

         

         
  

      <div className="quote__container">
        <QuoteText />
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
