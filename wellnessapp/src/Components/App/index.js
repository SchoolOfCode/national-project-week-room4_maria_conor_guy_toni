import { useEffect, useState } from "react";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import PageSubheading from "../PageSubheading";
import QuoteText from "../QuoteText";
import "./App.css";
import Stopwatch from "../StopWatch";
import Footer from "../Footer";

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


   // const [quotesData, setQuotesData] = useState([]);
   // async function getQuotes() {
   //    const response = await fetch("/quotes");
   //    const data = await response.json();
   //    setQuotesData([...quotesData, data.payload]);
   // }

   // useEffect(() => {
   //    getQuotes();
   // }, [quotesData]);

   // console.log(quotesData);






   return (
      <div className="App">
         <Logo />
         <div className="headers">
            <PageHeading />
            <PageSubheading />
         </div>
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

         

         
  

         </div>
         <Footer />
      </div>
   );
}

export default App;
