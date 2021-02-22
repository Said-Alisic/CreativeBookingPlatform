import { createHook } from 'async_hooks';
import { createCipher } from 'crypto';
import mongoose from 'mongoose';
import { TeacherSchema } from '../Teacher/TeacherModel';


export const ClassSchema = new mongoose.Schema({
    class_name: {
        type: String,
        required: true,
    },
    start_date: {
        type: Date,
        required: true,
    },
    duration_minutes: {
        type: int,
        required: true,
    },
    max_students: {
        type: Number,
        required: true,
    },  
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});
