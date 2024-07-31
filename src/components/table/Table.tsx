import React, {FC} from 'react';
import {IUSer} from "../../types/types";
import Line from "./Line";
import './styles.css';


interface TableProps {
    users: IUSer[];
    onChecked: (user: IUSer) => void;
    sendUsers: () => void;
    checkedUsers: IUSer[];
}

const Table: FC<TableProps> = ({users, onChecked, sendUsers, checkedUsers}) => {
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <th>ФИО сотрудника</th>
                    <th>Должность</th>
                    <th>Дата приема</th>
                    <th>Стаж работы</th>
                    <th>Выбрать</th>
                </tr>
                {users.map(user =>
                    <>
                        <Line user={user} key={user.id} onChecked={() => onChecked(user)}/>
                    </>
                )}
                </tbody>
            </table>
            <button
                disabled={checkedUsers.length == 0}
                onClick={() => {
                    if (checkedUsers.length > 0)
                        sendUsers()
                }}>
                Отправить
            </button>
        </div>

    );
};

export default Table;