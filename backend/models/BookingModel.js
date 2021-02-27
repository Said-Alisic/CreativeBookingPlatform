// Connects individual students to 
// their respective booked classes
import sequelize from '../db_config.js'
import { DATE, INTEGER, STRING } from 'sequelize';

export const BookingModel = sequelize.define('Booking', {
        student_id: {
            type: INTEGER,
            allowNull: false
        },
        student_id: {
            type: INTEGER,
            allowNull: false
        },
        status: {
            type: STRING,
        },
        booking_date: {
            type: DATE,

        },
        update_date: {
            type: DATE,

        },  
    }, {
    tableName: 'bookings'
});

