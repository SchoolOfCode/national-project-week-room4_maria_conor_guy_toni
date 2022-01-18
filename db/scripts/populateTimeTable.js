import query from "../index.js";
import timer from "../data/timer-data.js";

async function populateTimeTable(){
    for (let i = 0; i < timer.length; i++){
let title = timer[i].title;
let warning =  timer[i].warning;
let overdue = timer[i].overdue;

const res = await query (`INSERT INTO Timers (title, warning, overdue) VALUES ($1, $2, $3) RETURNING title`, [title, warning, overdue]);

console.log(res);

    }
}
populateTimeTable()