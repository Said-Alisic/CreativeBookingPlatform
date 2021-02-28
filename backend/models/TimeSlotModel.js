// Should be created for each day within a certain 
// period of days and multiple ones on a single day
import sequelize from '../db_config.js'
import { BOOLEAN, DATE, INTEGER } from 'sequelize';

export const TimeSlotModel = sequelize.define('TimeSlot', {
        class_id: {
            type: INTEGER,
            allowNull: false
        },
        start_date: {
            type: DATE,
            allowNull: false
        },
        end_date: {
            type: DATE,
            allowNull: false
        },
        room_number: {
            type: INTEGER,
            allowNull: false
        },
        floor_number: {
            type: INTEGER,
            allowNull: false
        },
        available: {
            type: BOOLEAN,
            allowNull: false
        },
    }, {
    tableName: 'timeSlots',
    timestamps: false
});

