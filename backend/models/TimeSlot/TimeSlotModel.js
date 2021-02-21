import mongoose from 'mongoose';


// Should be created for each day and multiple ones on a single day
export const TimeSlotSchema = new mongoose.Schema({
    class_id: {
        type: String,
        ref: 'Class',
        required: true,
    },
    class_name: {
        type: String,
        required: true,
    },
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
        required: true,
    },
    
})
