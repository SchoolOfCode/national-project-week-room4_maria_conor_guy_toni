import query from "../db/index.js";



export async function getAllTimers() {

const data = await query(`SELECT * FROM Timers;`);
return data.rows;
  
}