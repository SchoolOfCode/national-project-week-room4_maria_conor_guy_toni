import img from "../../images/School-of-Wellness.png";
import "./index.css";

function Logo(){
    return (
    <><div className="tooltip-on-hover">
    <a href="https://schoolofcode.co.uk/" target="_blank" rel="noreferrer">
        <img className = "logo" src = {img} alt="School of code wellness logo"/>
        </a>
    </div>
    <div className="tooltip">Click to go to the School of Code website</div>
    </>)
}
export default Logo