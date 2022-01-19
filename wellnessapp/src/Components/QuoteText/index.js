import React, {useEffect, useState} from 'react'

const QuoteText = () => {
// need to fetch text from a quotes api and return it in a box

const [quoteData, setQuoteData] = useState({});

useEffect(() => {
async function getQuote() {


    let response = await fetch("https://bodybuilding-quotes1.p.rapidapi.com/quotes?page=1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "bodybuilding-quotes1.p.rapidapi.com",
            "x-rapidapi-key": "727e08c480msh9b9088d53e375bep189ddfjsn01220a09870a"
        }
    });
    let data = await response.json();



//    const response = await fetch("https://zenquotes.io/api/random",{ mode: 'no-cors'});
//    let data = await response.json();
   setQuoteData(data[Math.floor(Math.random()*data.length)+1]);
   
   console.log(data);
}


   getQuote();
}, []);



    return (
        <div>
           {quoteData.quote}
        </div>
    )
}

export default QuoteText;