import React from 'react';
import logo from '../images/around_the_us.svg';

function Header(){
return(            <header className="header">
            <img className="header__logo" src={logo} alt="around the USA" />
        </header>
)
}
export default Header