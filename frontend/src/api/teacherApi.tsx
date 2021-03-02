import React, { useEffect } from 'react'
import axios from 'axios';


const URL = `http://localhost:4000/api`;


export const getTeachers = () => {
        useEffect (() => {
            axios.get(`${URL}/teachers`)
            .then((res) => {
                return res.data
            })
            .catch((error) => {
                console.log(error);
            });
        })  
}


