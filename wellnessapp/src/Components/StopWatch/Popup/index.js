import React, { useState, useEffect } from "react";
import timer from "../../../../../db/data/timer-data";
import "./style.css";

function Popup({ children, setTrigger, popupState, MetricText }) {
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
        <p>
          Remember to look after yourself! It's almost time that you {timer[0].title}
        </p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
