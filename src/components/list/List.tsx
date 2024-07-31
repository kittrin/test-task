import React, {FC} from 'react';
import {IUSer} from "../../types/types";

interface ListProps{
    checkedUsers: IUSer[];
}
const List:FC<ListProps> = ({checkedUsers}) => {
    if (checkedUsers.length>0)
    return (
        <ol className='choosed_employer'>
            {checkedUsers.map(el=>
            <li key={el.id}>
                {el.firstName} {el.lastName},
                {el.position},
                {el.email? <a href={`mailto:${el.email}`}>{el.email}</a>: ""}
            </li>
            )}
        </ol>
    ); else
        return (
            <span className='.zero'>Нет выбранных сотрудников</span>
        );
};

export default List;