import React, {useEffect, useState} from 'react';
import "./index.css";

const QuoteText = () => {
const [quotesData, setQuotesData] = useState({});
   async function getQuotes() {
      const response = await fetch("/quotes");
      const data = await response.json();
      setQuotesData(data[Math.floor(Math.random()*data.length)+1]);
   }

   useEffect(() => {
      getQuotes();
   }, [1000]);

   console.log(quotesData);


    return (
        <div>
              {quotesData.quote}, {quotesData.author}
        </div>
    )
}

export default QuoteText;