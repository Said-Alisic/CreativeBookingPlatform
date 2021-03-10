import axios from 'axios';


const URL = `http://localhost:4000/api`;

export const getStudents = () => {
    return axios.get(`${URL}/students`);
};