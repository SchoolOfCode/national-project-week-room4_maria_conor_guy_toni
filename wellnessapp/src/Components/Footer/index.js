
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
               <a href="mailto:anne-marie@schoolofcode.com?subject=I might need some help&body=Hello Anne-Marie">Contact</a>
            </p>
         </div>
         <div className="footer__images">
         <a href="https://www.samaritans.org/" target="_blank" rel="noreferer">
            <img
               className="footer__logo"
               src={samaritans}
               alt="Samaritans logo"
               width="100px"
               height="100px"
              
               
            /></a>
            <a href="https://www.mind.org.uk" target="_blank" rel="noreferer">
            <img
               className="footer__logo mind__logo"
               src={mind}
               alt="Mind Logo"
               width="100px"
               height="100px"
            /></a>
         </div>
      </div>
   );
};

export default Footer;

