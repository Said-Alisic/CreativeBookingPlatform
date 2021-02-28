// Connects individual teachers to 
// their respective hosted classes
import sequelize from '../db_config.js'
import { INTEGER } from 'sequelize';

export const ClassTeacherModel = sequelize.define('ClassTeacher', {
        teacher_id: {
            type: INTEGER,
            allowNull: false
        },
        class_id: {
            type: INTEGER,
            allowNull: false,
        },
    }, {
    tableName: 'classTeachers',
    timestamps: false
});
