// Holds information about students
import sequelize from '../db_config.js'
import { DATE, INTEGER, STRING } from 'sequelize';

export const StudentModel = sequelize.define('Student', {
        first_name: {
            type: STRING,
            allowNull: false
        },
        last_name: {
            type: STRING,
            allowNull: false
        },
        email: {
            type: STRING,
            allowNull: false
        },
        password: {
            type: STRING,
            allowNull: false
        },
        phone_number: {
            type: STRING,
            allowNull: false
        },  
        tickets: {
            type: INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        date_joined: {
            type: DATE,
        },
        last_active: {
            type: DATE,

        },
        access_level: {
            type: STRING,
            allowNull: false,
            defaultValue: 'STUDENT',
        },
    }, {
    tableName: 'students'
});

