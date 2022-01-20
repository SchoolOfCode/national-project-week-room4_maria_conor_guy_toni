import React, { useState, useEffect } from "react";
import "./style.css";

function Popup({ children, setTrigger, popupState }) {
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
        <button className="close-btn" onClick={() => setTrigger(false)}>
          close
        </button>
        {children}
        <p>Remember to look after yourself! Your timer is almost finished.</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
