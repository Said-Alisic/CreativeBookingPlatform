import React from 'react';
import { Teacher } from '../../Interfaces/TeacherInterface';



export const TeacherList = (props: Teacher[]): any => {

    return (
        <div>
            <ul>
                {props.map((item) => {
                    <li>{item.first_name}</li>
                    })
                }
            </ul>
        </div>
    )  
}

