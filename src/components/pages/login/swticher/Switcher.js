import React from 'react';
import { useState, useEffect, useRef  } from 'react';
import { Redirect, Route } from 'react-router';
import { useStateValue } from '../../../../context/StateProvider';
import Login from '../../../customComponents/login/signIn/Login'
import Register from '../../../customComponents/login/signUp/Register';
import RightSwitcher from './RightSwitcher';

import "./Switcher.scss";

function Switch() {
    
    const [isLogginActive, setIsLogginActive] = useState();
    const [{ user }] = useStateValue();
    const refRender = useRef();

    const userCheck = (currentUser) => {
        if (!currentUser) {
            return <Redirect to="/login" />;
        }
    }

    useEffect(() => {
        setIsLogginActive(true);
        userCheck({user});
        
    }, [])

    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";

    const changeState = () => {
        setIsLogginActive(!isLogginActive);
    }
    
    useEffect(() => {
        setIsLogginActive(true);


    }, [])

    return (
        <div className='switcher'>
            <div className="login">
                <div className="container">
                    {isLogginActive && (
                    <Login containerRef={ref => (refRender.current = ref)}/>
                            )}
                    {!isLogginActive && (
                    <Register containerRef={ref => (refRender.current = ref)}/>
                            )}
                </div>
                <div className="wrapper">
                    <RightSwitcher
                        current={current}
                        currentActive={currentActive}   
                        onClick={changeState}
                        isLogginActive={isLogginActive}
                        />
                </div>
            </div>
        </div>
    )
}                 


export default Switch;