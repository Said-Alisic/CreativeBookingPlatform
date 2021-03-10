import React, { useState, useEffect } from 'react';
import { getStudents } from '../../api/studentApi'
import Container from '../Layout/Container'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function StudentTable() {

    const [students, setStudents] = useState([])

    useEffect(() => {
        getStudents()
          .then(res => setStudents(res.data))
          .catch((err) => console.log(`Error occured at student api: ${err}`));
      }, [])

    return (
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Date Joined</TableCell>
                        <TableCell align="right">Tickets</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {students.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell align="right">{item.first_name} {item.last_name}</TableCell>
                        <TableCell align="right">{item.email}</TableCell>
                        <TableCell align="right">{item.date_joined}</TableCell>
                        <TableCell align="right">{item.tickets}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default StudentTable;



