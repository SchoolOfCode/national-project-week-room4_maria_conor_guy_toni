import React, {useEffect, useState} from 'react'

const QuoteText = () => {
// need to fetch text from a quotes api and return it in a box

const [QuoteData, setQuoteData] = useState("");

async function getQuote() {
   const response = await fetch("https://zenquotes.io/api/random");
   let data = await response.json();
   setQuoteData([...QuoteData, data]);
   console.log(data);
}

useEffect(() => {
   getQuote();
}, []);



    return (
        <div>
           
        </div>
    )
}

export default QuoteText;