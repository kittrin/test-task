import React, {FC} from 'react';
import NavButton from "./NavButton";
import "./styles.css";

interface NavBarProps {
    chooseEmployers: () => void;
    printList: () => void;
    clearList: () => void;
    saveFile: () => void;
}


const Navbar: FC<NavBarProps> = ({chooseEmployers, printList, clearList, saveFile}) => {
    return (
        <div className="navbar">
            <NavButton text="Выбрать сотрудников" onClick={()=>chooseEmployers()}/>
            <NavButton text="Печать списка" onClick={()=>printList()}/>
            <NavButton text="Очистить список" onClick={()=>clearList()}/>
            <NavButton text="Сохранить файл" onClick={()=>saveFile()}/>
        </div>
    );
};

export default Navbar;
