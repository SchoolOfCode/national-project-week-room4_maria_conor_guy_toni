import { useState, useEffect, useMemo } from "react";
import "./StopWatch.css";
import Timer from "./Timer";
import ControlButtons from "./Controlbuttons";
import MetricText from "./MetricText";

const getSeconds = (timeString) => {
   const [hours, minutes, seconds] = timeString.split(":");
   return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
};

function StopWatch({ metric, warning, overdue }) {
   const warningSeconds = getSeconds("00:00:05");
   const overdueSeconds = getSeconds("00:00:10");

   const [isActive, setIsActive] = useState(false);
   const [isPaused, setIsPaused] = useState(true);
   const [time, setTime] = useState(0);

   const timerState = useMemo(() => {
      if (time / 1000 > overdueSeconds) {
         return "overdue";
      }
      if (time / 1000 > warningSeconds) {
         return "warning";
      }
      return "default";
   }, [warningSeconds, overdueSeconds, time]);

   useEffect(() => {
      let interval = null;

      if (isActive && isPaused === false) {
         interval = setInterval(() => {
            setTime((time) => time + 1000);
         }, 1000);
      } else {
         clearInterval(interval);
      }
      return () => {
         clearInterval(interval);
      };
   }, [isActive, isPaused]);

   const handleStart = () => {
      setIsActive(true);
      setIsPaused(false);
   };

   const handlePauseResume = () => {
      setIsPaused(!isPaused);
   };

   const handleReset = () => {
      setIsActive(false);
      setTime(0);
   };

   return (
      <div className="stop-watch">
         <MetricText metric={metric} />
         <Timer timerState={timerState} time={time} />
         <ControlButtons
            active={isActive}
            isPaused={isPaused}
            handleStart={handleStart}
            handlePauseResume={handlePauseResume}
            handleReset={handleReset}
         />
      </div>
   );
}

export default StopWatch;
