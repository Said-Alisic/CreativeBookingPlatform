import React, { useState, useEffect } from 'react';
import { getTeachers } from '../../api/teacherApi'
import Container from '../Layout/Container'

export function TeacherList() {

    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        getTeachers()
          .then(res => setTeachers(res.data));
      }, [])

      
    return (
        <Container>
            <ul>
                {teachers.map(teacher => {
                    return <li>{teacher.first_name}</li>
                })}
            </ul>
        </Container>
    )


}


