import axios from 'axios';


const URL = `http://localhost:4000/api`;

export const getTimeSlots = () => {
    return axios.get(`${URL}/timeSlots`);
};