import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <div className={`${s.content} ${s.left}`}></div>
            {/*<img src="https://freepikpsd.com/file/2020/03/all-network-logo-png-.png" alt="logo-socialNetwork"/>*/}
            <span className={s.title}>.forEach</span>
        </header>
    );
};
export default Header;
