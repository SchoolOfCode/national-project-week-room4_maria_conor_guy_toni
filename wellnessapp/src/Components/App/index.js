import { useEffect, useState } from "react";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import PageSubheading from "../PageSubheading";
import QuoteText from "../QuoteText";
import "./App.css";
import Footer from "../Footer"

function App() {
   const [timerData, setTimerData] = useState([]);
   async function getTimers() {
      const response = await fetch("/timers");
      let data = await response.json();
      console.log(data.payload);
      setTimerData(data.payload);
      //console.log(data);
      console.log(setTimerData);
   // async function getTimers() {
   //    const response = await fetch("/timers");
   //    let data = await response.json();
   //    setTimerData([...timerData, data]);
   //    console.log(data);
   }

   useEffect(() => {
      getTimers();
   }, []);

   return (
      <div className="App">
         <Logo/>
         <PageHeading/>
         <PageSubheading/>
         <QuoteText/>
         <Footer/>
      </div>
   );
}

export default App;
