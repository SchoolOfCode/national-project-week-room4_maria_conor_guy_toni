import query from "../index.js";
import quotes from "../data/quote-data.js";

async function populateQuotesTable(){
    for (let i = 0; i < quotes.length; i++){
let quote = quotes[i].quote;
let author =  quotes[i].author;


const res = await query (`INSERT INTO quotes (quote, author) VALUES ($1, $2) RETURNING quote`, [quote, author]);

console.log(res);

    }
}
populateQuotesTable()