import query from "../index.js"

const sqlString = `CREATE TABLE IF NOT EXISTS quotes (id SERIAL PRIMARY KEY, quote TEXT, author TEXT)`;

async function createQuotesTable(){
    const res = await query(sqlString);
}

createQuotesTable()