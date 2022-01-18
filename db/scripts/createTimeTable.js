import query from "../index.js"

const sqlString = `CREATE TABLE IF NOT EXISTS Timers (id SERIAL PRIMARY KEY, title TEXT, warning TIME, overdue TIME)`;

async function createTimeTable(){
    const res = await query(sqlString);
}

createTimeTable()