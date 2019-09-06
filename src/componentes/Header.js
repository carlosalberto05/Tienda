import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to={'/'}>
                <img src="/images/logo2.png" alt="logo imagen"></img>
            </Link>
        </header>
    );
};

export default Header;