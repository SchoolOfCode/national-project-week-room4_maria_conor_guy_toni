import query from "../index.js";
import timer from "../data/timer-data.js";

// this function takes the data from our data folders and sends it to Heroku to fill up the table created there for our timers.

async function populateTimeTable(){
    for (let i = 0; i < timer.length; i++){
let title = timer[i].title;
let warning =  timer[i].warning;
let overdue = timer[i].overdue;

const res = await query (`INSERT INTO Timers (title, warning, overdue) VALUES ($1, $2, $3) RETURNING title`, [title, warning, overdue]);
// the $ are identifiers which assist in the protection of the input into our table avoiding injection risks
// add or remove depending on the number of keys needed on the table
console.log(res);

    }
}
populateTimeTable()