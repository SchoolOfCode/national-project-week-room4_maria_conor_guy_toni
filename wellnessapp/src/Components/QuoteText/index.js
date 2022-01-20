import React, {useEffect, useState} from 'react';
import "./index.css";


const QuoteText = () => {
const [quotesData, setQuotesData] = useState([]);
   async function getQuotes() {
      const response = await fetch("/quotes");
      const data = await response.json();
      setQuotesData([...quotesData, data.payload]);
   }

   useEffect(() => {
      getQuotes();
   }, []);

   console.log(quotesData);

const random = Math.floor(Math.random()*quotesData.length)+1
    return (
        <div>
        {quotesData.length === 0 ? (
               <p>Loading</p>) : (
                   quotesData[0][random].quote)}
{/* quotesData[0][random].quote  quotesData[0][random].author
               )} */}
        </div>
    )
}

export default QuoteText;