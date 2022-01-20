import React from "react";
import "./ControlButtons.css";

export default function ControlButtons(props) {
   const StartButton = (
      <div className="btn btn-one btn-start" onClick={props.handleStart}>
         Start
      </div>
   );
   const ActiveButtons = (
      <div className="btn-grp">
         <div className="btn btn-two" onClick={props.handleReset}>
            I've done it!
         </div>
         <div className="btn btn-one" onClick={props.handlePauseResume}>
         {/* Using the ternary operator it changes the button description when you click pause on the timers */}
            {props.isPaused ? "Keep tracking!" : "I'll do it now!"}
         </div>
      </div>
   );

   return (
      <div className="Control-Buttons">
      {/* using the ternary operator to swap the buttons that are displayed */}
         <div>{props.active ? ActiveButtons : StartButton}</div>
      </div>
   );
}
