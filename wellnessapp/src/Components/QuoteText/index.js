
import React, { useEffect, useState } from "react";
import "./index.css";

const QuoteText = () => {
   // need to fetch text from a quotes api and return it in a box

   const [quoteData, setQuoteData] = useState({});

   useEffect(() => {
      async function getQuote() {
         let response = await fetch(
            "https://bodybuilding-quotes1.p.rapidapi.com/quotes?page=1",
            {
               method: "GET",
               headers: {
                  "x-rapidapi-host": "bodybuilding-quotes1.p.rapidapi.com",
                  "x-rapidapi-key":
                     "727e08c480msh9b9088d53e375bep189ddfjsn01220a09870a",
               },
            }
         );
         let data = await response.json();

         // var quotes = data[Math.floor(Math.random()*data.length)];

         //    const response = await fetch("https://zenquotes.io/api/random",{ mode: 'no-cors'});
         //    let data = await response.json();
         setQuoteData(data[Math.floor(Math.random() * data.length) + 1]);


         console.log(data);
      }


      getQuote();
   }, []);

   return <div className="quote__text">{quoteData.quote}</div>;
};

export default QuoteText;

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

const random = Math.floor(Math.random()*25)
    return (
        <div>
        {quotesData.length === 0 ? (
               <p>Loading</p>) : (
                
                 `"${quotesData[0][random].quote}" - ${quotesData[0][random].author}`)}
{/* quotesData[0][random].quote  quotesData[0][random].author
               )} */}
        </div>
    )
}

export default QuoteText;

