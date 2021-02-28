import mysql from 'mysql2';
import { Sequelize } from 'sequelize';

const db_host = 'localhost'
const db = 'CreativeBookingDB'
const db_user = 'testuser'
const db_pass = 'testpass'
const db_dialect = 'mysql' // Which type of db to connect to

// Sequelize database connection
const sequelize = new Sequelize(db, db_user, db_pass, {
    host: db_host,
    dialect: db_dialect,
    logging: false
});

sequelize.authenticate( (err) => {
    if (err) {
      console.log(`Could not connect to database: ${db}`)
      throw err
    }
    console.log(`Successfully connected to database: ${db}`)
});

// sequelize assumes our tables have a primary key of id by default
// when defining models with sequelize.define(model_name, {fields}, {options})
export default sequelize;
  