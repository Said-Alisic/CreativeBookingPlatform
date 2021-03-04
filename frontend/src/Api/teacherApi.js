import axios from 'axios';


const URL = `http://localhost:4000/api`;

export const getTeachers = () => {
    return axios.get(`${URL}/teachers`)
};

