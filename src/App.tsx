import React, {useEffect, useState} from 'react';
import "./styles.css";
import Navbar from "./components/navbar/Navbar";
import MyWindow from "./components/window/MyWindow";
import {IUSer} from "./types/types";
import Table from "./components/table/Table";
import {data} from "./data";
import List from "./components/list/List";
import {renderToString} from "react-dom/server";

function App() {
    const [openWindow, setOpenWindow] = useState<boolean>(false);
    const [agreeUsers, setAgreeUsers] = useState<IUSer[]>([])
    const [checkedUsers, setCheckedUsers] = useState<IUSer[]>([]);
    const createNewArray = () => {
        let newArr: IUSer[] = [];
        for (let i = 0; i < data.length; i++) {
            let user = data[i];
            newArr = [...newArr, user];
            if (user.subordinates) {
                newArr = [...newArr, ...user.subordinates];
            }
        }
        return newArr;
    }
    const [users, setUsers] = useState<IUSer[]>(createNewArray());
    const [uncheckedUsers, setUncheckedUsers] = useState<IUSer[]>(users);
    const windowHandler = () => {
        setOpenWindow(!openWindow);
    }
    const checkInput = (user: IUSer) => {
        const isCheck = checkedUsers.find((el) => {
            return el.id === user.id;
        })
        if (isCheck) {
            const arr = checkedUsers.filter((item) => item.id !== user.id);
            setCheckedUsers(arr);
        } else {
            setCheckedUsers([...checkedUsers, user]);
        }
    }
    const sendUsers = () => {
        const uncheked = users.filter(x => !checkedUsers.some(y => x.id === y.id) && !agreeUsers.some(y => x.id === y.id));
        setUncheckedUsers(uncheked);
        setAgreeUsers([...agreeUsers, ...checkedUsers]);
        setCheckedUsers([]);
    }
    useEffect(() => {
        if (agreeUsers.length > 0) {
            localStorage.setItem("list", JSON.stringify(agreeUsers));
        }
    }, [agreeUsers]);

    let list: string | null;

    useEffect(() => {
        list = localStorage.getItem("list");
        // @ts-ignore
        setAgreeUsers(JSON.parse(list));
    }, [])
    useEffect(()=>{
        const uncheked = users.filter(x => !checkedUsers.some(y => x.id === y.id) && !agreeUsers.some(y => x.id === y.id));
        setUncheckedUsers(uncheked);
    }, [agreeUsers])
    const clearUsers = () => {
        localStorage.removeItem("list");
        setAgreeUsers([]);
        setCheckedUsers([]);
        setUncheckedUsers(users);
    }
    const printUsers = () => {
        let mywindow: any = window.open("", "PRINT", "height=400,width=600");
        let choosed_employers;
        if (agreeUsers.length > 0) {
            choosed_employers = renderToString(<List checkedUsers={agreeUsers}/>);
        } else {
            choosed_employers = renderToString(<span>Нет выбранных элементов</span>);
        }
        mywindow.document.write(
            "<html><head><title>" + document.title + "</title>"
        );
        mywindow.document.write("</head><body >");
        mywindow.document.write("<h1>" + document.title + "</h1>");
        mywindow.document.write(choosed_employers);
        mywindow.document.write("</body></html>");

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();
        mywindow.close();

        return true;
    }
    const saveFile = () => {
        let choosed_employers;
        if (agreeUsers.length > 0) {
            choosed_employers = renderToString(<List checkedUsers={agreeUsers}/>);
        } else {
            choosed_employers = renderToString(<span>Нет выбранных элементов</span>);
        }
        let htmlFile = `<html><head><title>` + document.title + "</title>" + "</head><body >" + choosed_employers + "</body></html>";
        const blob = new Blob([htmlFile], {type: "text/html"});
        let link = document.createElement("a");
        link.download = "thanks_for_task.htm";
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
    }
    return (
        <div className="main">
            <Navbar chooseEmployers={() => windowHandler()} printList={() => printUsers()}
                    clearList={() => clearUsers()} saveFile={() => saveFile()}/>
            <MyWindow column='1/5'
                      open={true}
                      titleWindow="Выбранные сотрудники"
                      content={<List checkedUsers={agreeUsers}/>}
                      closeBtn={false}/>
            <MyWindow column='5/13'
                      open={openWindow}
                      titleWindow="Выбрать сотрудников"
                      content={<Table users={uncheckedUsers} onChecked={checkInput} sendUsers={sendUsers}
                                      checkedUsers={checkedUsers}/>}
                      closeBtn={true}
                      clickClose={() => windowHandler()}/>
        </div>
    );
}

export default App;
