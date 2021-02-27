import mysql from 'mysql2';
import { Sequelize } from 'sequelize';


const env = process.env;

const db_host = 'localhost'
const db = 'CreativeBookingDB'
const db_user = 'testuser'
const db_pass = 'testpass'
const db_dialect = 'mysql'

// Sequelize database connection
const sequelize = new Sequelize(db, db_user, db_pass, {
  host: db_host,
  dialect: db_dialect
});

sequelize.authenticate( (err) => {
  if (err) {
    console.log(`Could not connect to database: ${db}`)
    throw err
  }
  console.log(`Successfully connected to database: ${db}`)
});

// Exporting configurations for server
export default {
    PORT: env.PORT || 4000,
    db_connection: sequelize,
};


