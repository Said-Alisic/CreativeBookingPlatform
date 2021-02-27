import mysql from 'mysql2';
import Sequelize from 'sequelize';


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
})

connection.connect( (err) => {
    if (err) {
      console.log(`Could not connect to database: ${db}`)
      throw err
    }
      

    console.log(`Successfully connected to database: ${db}`)
});
/**
const sequelize = new Sequelize(connection.database, connection.USER, connection.PASSWORD, {
  host: connection.HOST,
  dialect: connection.dialect,
  operatorsAliases: false,

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
**/


// Exporting configurations for server
export default {
    PORT: env.PORT || 4000,
    db_connection: connection,
};


