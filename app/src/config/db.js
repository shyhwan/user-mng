const mysql = require("mysql");

const db = mysql.createConnection({
  host: "login-testtt.cqrqtj4tt0ry.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "Dkagh4$%^",
  database: "login_testtt",
});

db.connect();

module.exports = db;
