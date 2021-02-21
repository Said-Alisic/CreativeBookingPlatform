import mongoose from 'mongoose';

// Used for ticket purchase transaction tracking
export const TransactionSchema = new mongoose.Schema({
    student_id: {
        type: String,
        ref: 'Student',
        required: true,
    },
    card_type: {
        type: String,
        required: true,
    },
    card_holder: {
        type: String,
        required: true,
    },
    card_number: {
        type: String,
        required: true,
    },
    transaction_date: {
        type: Date,
        default: Date.now,
    },
});
