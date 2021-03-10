import React, { useState, useEffect } from 'react';
import { getTimeSlots } from '../../api/timeSlotApi'
import Container from '../Layout/Container'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function TimeSlotTable() {

    const [timeSlots, setTimeSlots] = useState([])

    useEffect(() => {
        getTimeSlots()
          .then(res => setTimeSlots(res.data))
          .catch((err) => console.log(`Error occured at timeSlot api: ${err}`));
      }, [])

    return (
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Availability Status</TableCell>
                        <TableCell align="right">Floor and Room</TableCell>
                        <TableCell align="right">Day</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Time</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                {timeSlots.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell align="center">{item.available}</TableCell>
                        <TableCell align="right">F{item.floor_number} R{item.room_number}</TableCell>
                        <TableCell align="right">{item.day}</TableCell>
                        <TableCell align="right">{item.date}</TableCell>
                        <TableCell align="right">From {item.start_time} to {item.end_time}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default TimeSlotTable;



