import mongoose from 'mongoose';


export const BookingSchema = new mongoose.Schema(
    { 
        student_id: {
            type: Number,
            required: true,
        },
        class_id: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },


});
