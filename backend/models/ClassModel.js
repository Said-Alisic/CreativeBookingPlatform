// Holds class information
import sequelize from '../db_config.js'
import { DATE, INTEGER, STRING } from 'sequelize';

export const ClassModel = sequelize.define('Class', {
        class_name: {
            type: STRING,
            allowNull: false
        },
        start_date: {
            type: DATE,
            allowNull: false,
        },
        max_students: {
            type: INTEGER,
            allowNull: false
        },
        skill_level: {
            type: STRING,
            allowNull: false
        },
        class_info: {
            type: STRING,
            allowNull: false
        },
        status: {
            type: STRING,
            allowNull: false,
            defaultValue: 'ACTIVE'
        },
    }, {
    tableName: 'classes'
});


