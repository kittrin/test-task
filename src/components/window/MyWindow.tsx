import React, {FC} from 'react';
import "./styles.css";
import close from "../../images/close.svg"

interface WindowProps {
    column: string;
    open: boolean;
    titleWindow: React.ReactChild | React.ReactNode;
    content: React.ReactChild | React.ReactNode;
    closeBtn: boolean;
    clickClose?: () => void;

}

const MyWindow: FC<WindowProps> = ({titleWindow, open, column, content, closeBtn, clickClose}) => {
    return (
        <div className={open ? 'window open' : 'window'} style={{gridColumn: column}}>
            <div className="window__title">
                <span>{titleWindow}</span>
                {closeBtn ?
                    <div className="close" onClick={() => clickClose ? clickClose() : console.log()}>
                        <img src={close} alt="close"/>
                    </div>
                    :
                    <></>
                }
            </div>
            <div className='window__content'>
                {content}
            </div>
        </div>
    );
};

export default MyWindow;