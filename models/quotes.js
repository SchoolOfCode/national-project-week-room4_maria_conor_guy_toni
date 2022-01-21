import query from "../db/index.js";

// function to retrieve all data from our quotes table. Part of our REST API.

export async function getAllQuotes() {

const data = await query(`SELECT * FROM quotes;`);
return data.rows;
  
}