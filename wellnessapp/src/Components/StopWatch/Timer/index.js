import React from "react";
import "./Timer.css";
// This function calculates the timers and manages the display.
export default function Timer({ time, timerState }) {
   return (
      <div className={`timer ${timerState}`}>
         <span className="digits">
            {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
         </span>
         <span className="digits">
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
         </span>
         <span className="digits">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
         </span>
      </div>
   );
}
