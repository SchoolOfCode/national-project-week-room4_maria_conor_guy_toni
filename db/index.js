
import pg from "pg";
import {db} from "../config.js"

// no need to change here. Helps with anonimisation of the passwords and log in information 
const pool = new pg.Pool({
  user: db.user,
  host: db.host,
  database: db.database,
  password: db.password,
  port: db.port,
    ssl: {rejectUnauthorized: false},
  
  });
  console.log(process.env.TESTING)
  
export function query(text, params){
   
    return pool.query(text, params);
}   



export default query