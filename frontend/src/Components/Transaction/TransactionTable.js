import React, { useState, useEffect } from 'react';
import { getTransactions } from '../../api/transactionApi'
import Container from '../Layout/Container'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function TransactionTable() {

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getTransactions()
          .then(res => setTransactions(res.data))
          .catch((err) => console.log(`Error occured at transaction api: ${err}`));
      }, [])

    return (
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Card Type</TableCell>
                        <TableCell align="right">Card Number</TableCell>
                        <TableCell align="right">Card Holder</TableCell>
                        <TableCell align="right">Transaction Date</TableCell>
                        <TableCell align="right">Transaction Info</TableCell>
                        <TableCell align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {transactions.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell align="center">{item.card_type}</TableCell>
                        <TableCell align="right">{item.card_number}</TableCell>
                        <TableCell align="right">{item.card_holder}</TableCell>
                        <TableCell align="right">{item.transaction_date}</TableCell>
                        <TableCell align="right">{item.transaction_info}</TableCell>
                        <TableCell align="right">{item.amount}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default TransactionTable;



