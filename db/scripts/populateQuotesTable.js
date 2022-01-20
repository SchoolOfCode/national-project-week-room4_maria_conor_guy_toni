import query from "../index.js";
import quotes from "../data/quote-data.js";

// this function takes the data from our data folders and sends it to Heroku to fill up the table created there for our quotes.

async function populateQuotesTable(){
    for (let i = 0; i < quotes.length; i++){
let quote = quotes[i].quote;
let author =  quotes[i].author;


const res = await query (`INSERT INTO quotes (quote, author) VALUES ($1, $2) RETURNING quote`, [quote, author]);
// the $ are identifiers which assist in the protection of the input into our table avoiding injection risks
// add or remove depending on the number of keys needed on the table
console.log(res);

    }
}
populateQuotesTable()