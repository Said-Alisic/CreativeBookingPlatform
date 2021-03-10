import React, { useState, useEffect } from 'react';
import { getBookings } from '../../api/bookingApi'
import Container from '../Layout/Container'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function BookingTable() {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        getBookings()
          .then(res => setBookings(res.data))
          .catch((err) => console.log(`Error occured at booking api: ${err}`));
      }, [])

    return (
        <Container>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Booking Status</TableCell>
                        <TableCell align="right">Class</TableCell>
                        <TableCell align="right">Teacher</TableCell>
                        <TableCell align="right">Booking Date</TableCell>
                        <TableCell align="right">Last Updated</TableCell>
                        <TableCell align="right">Update Information</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {bookings.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell align="center">{item.status}</TableCell>
                        <TableCell align="right">{item.class}</TableCell>
                        <TableCell align="right">{item.teacher}</TableCell>
                        <TableCell align="right">{item.booking_date}</TableCell>
                        <TableCell align="right">{item.update_date}</TableCell>
                        <TableCell align="right">{item.update_info}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default BookingTable;



