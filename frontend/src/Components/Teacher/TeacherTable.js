import React, { useState, useEffect } from 'react';
import { getTeachers } from '../../api/teacherApi'
import Container from '../Layout/Container'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function TeacherTable() {

    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        getTeachers()
          .then(res => setTeachers(res.data))
          .catch((err) => console.log(`Error occured at teacher api: ${err}`));
      }, [])
    
    return (
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Profile Display Name</TableCell>
                        <TableCell align="center"> Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Phone Number</TableCell>
                        <TableCell align="right">Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {teachers.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell component="th" scope="row" align="center">{item.display_name}</TableCell>
                        <TableCell align="center">{item.first_name} {item.last_name}</TableCell>
                        <TableCell align="right">{item.email}</TableCell>
                        <TableCell align="right">{item.phone_number}</TableCell>
                        <TableCell align="right">{item.address}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default TeacherTable;

