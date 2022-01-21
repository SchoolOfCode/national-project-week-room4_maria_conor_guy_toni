import query from "../db/index.js";

// function to retrieve all data from our timers table. Part of our REST API.

export async function getAllTimers() {

const data = await query(`SELECT * FROM Timers;`);
return data.rows;
  
}