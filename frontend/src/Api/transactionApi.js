import axios from 'axios';


const URL = `http://localhost:4000/api`;

export const getTransactions = () => {
    return axios.get(`${URL}/transactions`);
};