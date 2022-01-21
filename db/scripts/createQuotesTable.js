import query from "../index.js"

// this function creates the table "quotes" in Heroku which is used for our API quotes

const sqlString = `CREATE TABLE IF NOT EXISTS quotes (id SERIAL PRIMARY KEY, quote TEXT, author TEXT)`;

async function createQuotesTable(){
    const res = await query(sqlString);
}

createQuotesTable()