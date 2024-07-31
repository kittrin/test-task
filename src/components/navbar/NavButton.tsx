import React, {FC} from 'react';

interface NavButtonProps {
    text: string;
    onClick: () => void;
}

const NavButton: FC<NavButtonProps> = ({text, onClick}) => {
    return (
        <button className="navbar__button" onClick={()=>onClick()}>
            {text}
        </button>
    );
};

export default NavButton;