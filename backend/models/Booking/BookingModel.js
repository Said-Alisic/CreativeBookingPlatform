import mongoose from 'mongoose';


export const BookingSchema = new mongoose.Schema(
    { 
        student_id: {
            type: String,
            ref: 'Student',
            required: true,
        },
        class_id: {
            type: String,
            ref: 'Class',
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        booking_date: {
            type: Date,
            default: Date.now,
        }
});
