import mysql from 'mysql';


const env = process.env;

const db_host = 'localhost'
const db = 'CreativeBookingDB'
const db_user = 'testuser'
const db_pass = 'testpass'

const connection = mysql.createConnection({
  host: db_host,
  user: db_user,
  password: db_pass,
  database: db,
  insecureAuth : true
})

connection.connect( (err) => {
    if (err) throw err

    console.log(`Successfully connected to database: ${db}`)
});

// Exporting configurations for server
export default {
    PORT: env.PORT || 4000,
    db_connection: connection,
};


