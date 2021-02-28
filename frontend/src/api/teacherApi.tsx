import React, { useState, useEffect } from 'react'
import axios from 'axios';

const URL = `http://localhost:4000/api`;

const [teachers, setTeachers] = useState([])

export const getTeachers = () => {

    useEffect (() => {
        axios.get(`${URL}/teachers`)
        .then((res) => {
            setTeachers(res.data) 
            return teachers
        })
        .catch((error) => {
            console.log(error);
        });
    })  
}

