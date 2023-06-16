const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const DB_PASSWORD = process.env.DB_PASSWORD;

pool_params = {
  host: "localhost",
  port: 5432,
  database: "shoppinglist",
};

if (DB_PASSWORD) {
  pool_params.user = "postgres";
  pool_params.password = DB_PASSWORD;
}

const pool = new pg.Pool(pool_params);

module.exports = pool;
