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
    setTimerData([...timerData, data]);
    console.log(data);
  }

  useEffect(() => {
    getTimers();
  }, []);

  return (
    <div className="App">
      <Logo />
      <PageHeading />
      <PageSubheading />
      <Stopwatch />
    </div>
  );
}

export default App;
