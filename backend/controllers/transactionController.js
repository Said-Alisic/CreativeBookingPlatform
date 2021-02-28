import sequelize from '../db_config.js';
import TransactionModel from '../models/TransactionModel.js';

const Transaction = sequelize.models.Transaction;

export const addNewTransaction = (req, res) => {
    Transaction.create(req.body)
        .then(data => res.json(data))

}

export const getTransactions = (req, res) => {
    Transaction.findAll()
        .then(data => res.json(data))
}

export const getTransactionById = (req, res) => {
    Transaction.findByPk(req.params.TransactionId)
        .then(data => res.json(data))
}