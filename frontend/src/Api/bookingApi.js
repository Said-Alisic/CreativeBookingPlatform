import axios from 'axios';


const URL = `http://localhost:4000/api`;

export const getBookings = () => {
    return axios.get(`${URL}/bookings`);
};