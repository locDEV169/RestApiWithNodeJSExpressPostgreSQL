const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "testDB",
    password: "123456",
    port: 5433,
})

module.exports = pool;