import mongoose from 'mongoose';


export const classTeacher = new mongoose.Schema(
    { 
        teacher_id: {
            type: String,
            ref: 'Teacher',
            required: true,
        },
        class_id: {
            type: String,
            ref: 'Class',
            required: true,
        },
});