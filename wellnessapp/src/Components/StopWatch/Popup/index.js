import React, { useState, useEffect } from "react";
import "./style.css";

function Popup({ setTrigger, popupState, metric }) {
   const [timedPopup, setTimedPopup] = useState(false);
   setTrigger = setTimedPopup;
   useEffect(() => {
      setTimeout(() => {
         setTimedPopup(popupState);
      });
   }, [popupState]);

   return timedPopup ? (
      <div className="popup">
         <div className="popup-inner">
            <div className="close__button">
               <button className="close-btn" onClick={() => setTrigger(false)}>
                  X
               </button>
            </div>
            <div className="popup__text">
               <p>
                  Remember to look after yourself! It's almost time that you{" "}
                  {metric}!
               </p>
            </div>
         </div>
      </div>
   ) : (
      ""
   );
}

export default Popup;
