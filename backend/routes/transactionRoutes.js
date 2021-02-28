import { 
    addNewTransaction, 
    getTransactions,
    getTransactiontById
} from '../controllers/transactionController.js';

const transactionsRoutes = (server) => {
    server.route('/api/transactions')
        .get(getTransactions)
        .post(addNaddNewTransactionewTimeSlot)
    
    server.route('/api/transaction/:TransactionId')
        .get(getTransactiontById)

}

export default transactionsRoutes;