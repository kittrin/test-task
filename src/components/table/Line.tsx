import React, {FC} from 'react';
import {IUSer} from "../../types/types";

interface LineProps {
    user: IUSer;
    onChecked: ()=>void;
}

const Line:FC <LineProps> = ({user, onChecked}) => {
    const startDate = `${user.startDate.getDate()}.${user.startDate.getMonth()}.${user.startDate.getFullYear()}`;
    let today = new Date();
    let diff:number = Math.floor(today.getTime() - user.startDate.getTime());
    let days:number = Math.floor(diff / (1000 * 60 * 60 * 24));
    let months:number = Math.floor(days / 31);
    let years:number = Math.floor(months / 12);
    months = months - years * 12;
    let exp:string = `${years}, ${months}`;

    return (
        <tr>
            <td>{user.firstName} {user.lastName}</td>
            <td>{user.position}</td>
            <td>{startDate}</td>
            <td>{exp}</td>
            <td><input type="checkbox" onChange={(e)=>onChecked()}/></td>
        </tr>
    );
};

export default Line;