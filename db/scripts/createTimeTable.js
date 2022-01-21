import query from "../index.js"

// this function creates the table "Timers" in Heroku which is used for our timers time and text called from the database

const sqlString = `CREATE TABLE IF NOT EXISTS Timers (id SERIAL PRIMARY KEY, title TEXT, warning TIME, overdue TIME)`;

async function createTimeTable(){
    const res = await query(sqlString);
}

createTimeTable()