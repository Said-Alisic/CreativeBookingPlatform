import { 
    addNewBooking, 
    getBookings,
    getBookingById
} from '../controllers/BookingController.js';

const bookingRoutes = (server) => {
    server.route('/api/bookings')
        .get(getBookings)
        .post(addNewBooking)
    
    server.route('/api/booking/:BookingId')
        .get(getBookingById)

}

export default bookingRoutes;
