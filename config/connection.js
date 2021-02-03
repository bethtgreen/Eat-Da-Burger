// Set up MySQL connection.
const mysql = require('mysql');
var connection;
if (process.env.JAWSDB_URL){
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connecion = mysql.createConnection({
host: 'localhost',
  port: 8080,
  user: 'root',
  // NOTE: Be sure to add your MySQL password here!
  password: 'rootroot',
  database: 'burger_db',
});
};

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
