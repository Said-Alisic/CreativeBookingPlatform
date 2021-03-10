import React, { useState, useEffect } from 'react';
import { getClasses } from '../../api/classApi'
import Container from '../Layout/Container'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function ClassTable() {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        getClasses()
          .then(res => setClasses(res.data))
          .catch((err) => console.log(`Error occured at class api: ${err}`));
      }, [])

    return (
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Class Name</TableCell>
                        <TableCell align="right">Type of Class</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Max Number of students</TableCell>
                        <TableCell align="right">Skill Level</TableCell>
                        <TableCell align="right">Class Info</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Teacher</TableCell>
                        <TableCell align="right">Floor and Room</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {classes.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell align="center">{item.class_name}</TableCell>
                        <TableCell align="right">{item.class_type}</TableCell>
                        <TableCell align="right">{item.start_date}</TableCell>
                        <TableCell align="right">From {item.start_time} - {item.end_time}</TableCell>
                        <TableCell align="right">{item.max_students}</TableCell>
                        <TableCell align="right">{item.skill_level}</TableCell>
                        <TableCell align="right">{item.class_info}</TableCell>
                        <TableCell align="right">{item.status}</TableCell>
                        <TableCell align="right">{item.teacher}</TableCell>
                        <TableCell align="right">F{item.floor_number} R{item.room_number}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default ClassTable;



