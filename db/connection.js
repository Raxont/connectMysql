import mysql from "mysql2/promise";
export const connection = await mysql.createConnection({
    host: 'monorail.proxy.rlwy.net',
    port: 24839,
    database: 'railway',
    user: 'root',
    password: 'LbXrkVWgbiNttXVVMlAybifPHswFvfed'
  });