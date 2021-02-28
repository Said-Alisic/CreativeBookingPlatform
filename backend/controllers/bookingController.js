import sequelize from '../db_config.js';
import BookingModel from '../models/BookingModel.js';

const Booking = sequelize.models.Booking;

export const addNewBooking = (req, res) => {
    Booking.create(req.body)
        .then(data => res.json(data))

}

export const getBookings = (req, res) => {
    Booking.findAll()
        .then(data => res.json(data))
}

export const getBookingById = (req, res) => {
    Booking.findByPk(req.params.BookingId)
        .then(data => res.json(data))
}