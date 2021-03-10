import axios from 'axios';


const URL = `http://localhost:4000/api`;

export const getClasses = () => {
    return axios.get(`${URL}/classes`);
};