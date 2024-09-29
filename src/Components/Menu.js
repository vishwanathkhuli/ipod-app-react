import React from 'react';
import './Menu.css';

const Menu = ({ rotateMenu, selectItem }) => {
    return (
        <div className="menu-control">
            <div className="wheel">
                <button className="up" onClick={() => rotateMenu('up')}>▲</button>
                <div className="center" onClick={selectItem}></div>
                <button className="down" onClick={() => rotateMenu('down')}>▼</button>
            </div>
        </div>
    );
};

export default Menu;
