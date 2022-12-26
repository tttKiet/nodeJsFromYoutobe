import mysql from "mysql2/promise";

console.log("Starting up connection -----------------");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejsbasic",
});

export default pool;
