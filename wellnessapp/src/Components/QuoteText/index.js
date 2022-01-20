import React, { useEffect, useState } from "react";
import "./index.css";
// Function to fetch quotes data from our Heroku server
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
// We are randomising the number for the id picked out of our quotes array
  const random = Math.floor(Math.random() * 25);
  return (
    <div className="quote__text">
      {quotesData.length === 0 ? (
        <p>Loading</p>
      ) : (
        `"${quotesData[0][random].quote}" - ${quotesData[0][random].author}`
      )}
    </div>
    
  );
};
// Here were are picking the quote and the author from our quotes array 
export default QuoteText;
