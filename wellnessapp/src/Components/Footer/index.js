import React from "react";
import samaritans from "../../images/Samaritans-logo.png";
import mind from "../../images/Mind-Logo.png";
import "./index.css";

const Footer = () => {
   return (
      <div className="footers">
         <div className="footer__text">
            <p>
               <a>Ts&Cs</a>|
               <a href="mailto:anne-marie@schoolofcode.com">Contact</a>
            </p>
         </div>
         <div className="footer__images">
            <img
               className="footer__logo"
               src={samaritans}
               alt="Samaritans logo"
               width="100px"
               height="100px"
               href="https://www.samaritans.org/"
               target="_blank"
            />
            <img
               className="footer__logo mind__logo"
               src={mind}
               alt="Mind Logo"
               width="100px"
               height="100px"
               href="https://www.mind.org.uk/"
               target="_blank"
            />
         </div>
      </div>
   );
};

export default Footer;
