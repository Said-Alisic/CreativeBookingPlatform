import mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    }, 
    last_name: {
        type: String,
        required: true,
    }, 
    password: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
    }, 
    phone_number: {
        type: String,
        required: true,
    }, 
    tickets: {
        type: Number,
        default: 0,
    }, 
    date_joined: {
        type: Date,
        default: Date.now,
    },
    last_active: {
        type: Date,
    }
});