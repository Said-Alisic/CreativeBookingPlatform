// Holds information about teachers
import sequelize from '../db_config.js'
import { DATE, STRING } from 'sequelize';

export const TeacherModel = sequelize.define('Teacher', {
        display_name: {
            type: STRING,
            allowNull: false
        },
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
        address: {
            type: STRING,
            allowNull: false
        },
        phone_number: {
            type: STRING,
            allowNull: false
        },  
        teacher_info: {
            type: STRING,
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
            defaultValue: 'TEACHER'
        },
    }, {
    tableName: 'teachers'
});


