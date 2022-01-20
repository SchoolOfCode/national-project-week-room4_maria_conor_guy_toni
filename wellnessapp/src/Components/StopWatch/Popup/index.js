import React, { useState, useEffect } from "react";
import "./style.css";

function Popup({ children, setTrigger, popupState }) {
   const [timedPopup, setTimedPopup] = useState(false);

   useEffect(() => {
      setTimeout(() => {
         setTimedPopup(popupState);
      });
   }, [popupState]);

   return timedPopup ? (
      <div className="popup">
         <div className="popup-inner">
            <button className="close-btn" onClick={() => setTrigger(false)}>
               close
            </button>
            {children}
         </div>
      </div>
   ) : (
      ""
   );
}

export default Popup;
