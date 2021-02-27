// Holds information about students
import sequelize from '../db_config.js'
import { DataTypes } from 'sequelize';


export const StudentModel = sequelize.define('Student', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

