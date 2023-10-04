import React from 'react';
import { Avatar  } from '@material-ui/core';
import { useStateValue } from '../../../../context/StateProvider';
import auth from  '../../../firebase/firebase'
import logo from '../../../../assets/logo/logo.png';

import "./Header.scss";

function Header() {

    const [{ user }] = useStateValue();   

    
    const email = user?.email;
    const name = email.substring(0, email.lastIndexOf("@"));
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)

    const logout = () => {
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img 
                    src={logo} 
                    alt="from Internet"
                    />
                <h1>Sanjog Suppliers</h1>
            </div>
            
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <div className="avatar__info">
                        <h4 classname="header__avatar">{nameCapitalized}</h4>
                        <small onClick={logout}>{ user.email ? 'Signout' : 'User Log' }</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
