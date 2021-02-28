// Used for ticket purchase transaction tracking
import sequelize from '../db_config.js'
import { DATE, FLOAT, INTEGER, STRING } from 'sequelize';

export const TransactionModel = sequelize.define('Transaction', {
        student_id: {
            type: INTEGER,
            allowNull: false
        },
        card_type: {
            type: STRING,
            allowNull: false
        },
        card_number: {
            type: STRING,
            allowNull: false
        },
        card_holder: {
            type: STRING,
            allowNull: false
        },
        transaction_date: {
            type: DATE,
            allowNull: false
        },
        transaction_info: {
            type: STRING,
            allowNull: false
        },
        amount: {
            type: FLOAT,
            allowNull: false
        },
    }, {
    tableName: 'transactions',
    timestamps: false
});


