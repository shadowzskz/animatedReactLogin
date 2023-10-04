import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CustomButton from '../../../customElements/customButton/CustomButton'
import FormInput from  '../../../customElements/formInput/FormInput'
import auth from '../../../firebase/firebase';

import loginImg from "../../../../assets/logo/register.svg";
import "./Register.scss";

function Register() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState(); 
    const [confirmPassword, setConfirmPassword] = useState(); 
    const [error, setError] = useState('')
    
    const history = useHistory();

    function register(e) {
        e.preventDefault();

        if (password!== confirmPassword) {
            return setError('Passwords dont match')
        }
        try {
            setError('')
            auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // redirect to dashboard
                history.push('/')
            })
            .catch((e) => setError(e.message));
        } catch{
            setError('Fail to create an error')
        }
        setError('');
    }

    return (
        <div className="register">
            <div className="register__header"><h4>Register</h4></div>
                <div className="register__content">
                    <div className="register__image">
                        <img src={loginImg} />
                    </div>
                    <form className="register__form">
                    <div className="register__form__group">
                            <FormInput 
                                type="email" 
                                name="email" 
                                handleChange={e => setEmail(e.target.value)}
                                value={email} 
                                label="Email"
                                required 
                            />
                        </div>
                        <div className="register__form__group">
                            <FormInput 
                                    type="password" 
                                    name="passoword" 
                                    handleChange={e => setPassword(e.target.value)}
                                    value={password} 
                                    label="Password"
                                    required 
                                />
                        </div>
                        <div className="register__form__group">
                            <FormInput 
                                    type="password" 
                                    name="passoword" 
                                    handleChange={e => setConfirmPassword(e.target.value)}
                                    value={confirmPassword} 
                                    label="Confirm Password"
                                    required 
                                />
                        </div>
                        { error && <span>{error}</span>}
                        <div className="footer">
                            <div className="btn">
                                <CustomButton onClick={register}>Register</CustomButton>
                            </div>
                        </div>
                        </form>
                </div>                
        </div>
    )
}

export default Register