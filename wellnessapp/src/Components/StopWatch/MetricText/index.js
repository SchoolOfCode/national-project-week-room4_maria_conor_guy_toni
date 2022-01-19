import "./index.css";

function MetricText({ metric }) {
   return (
      <div className="metric__text">
         <p>Last time I {metric}</p>
      </div>
   );
}

export default MetricText;
