import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../../../../context/StateProvider';


import auth from '../../../../firebase/firebase';



function Content() {

    const [{ user }] = useStateValue();    
    const [error, setError] = useState('')
    const history = useHistory();
    

    async function logout() {
        if (user) {
            try {
                await auth.signOut();
                history.push('/sign');
            }
            catch {
                setError('Failed to Logout');
            }
        }
    }

    const email = user?.email;
    const name = email.substring(0, email.lastIndexOf("@"));
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <div className="dash">
            <div className="header">
                <div className="header__content">
                    <div className="header__info">
                        <p><h1>Hi {nameCapitalized} </h1></p>
                    </div>
                    <Link to="/update" className='header__btn'>Update Profile</Link>                                    
                    <span onClick={logout} className='header__btn'>
                    { user ? 'Sign Out': 'Hehe' }
                    </span>
                </div>
            </div>
            <div className="dash__error">
                { error && <span>{error}</span>}
            </div>
        </div>
    )
}

export default Content
