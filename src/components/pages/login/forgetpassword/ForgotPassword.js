import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormInput from '../../../customElements/formInput/FormInput';
import CustomButton from '../../../customElements/customButton/CustomButton';
import auth from '../../../firebase/firebase';

import loginImg from '../../../../assets/logo/forgot.svg';
import './ForgotPassword.scss';

function ForgotPassword() {

    const [email, setEmail] = useState();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

    function resetPassword(e) {
        try {
            setError('');
            setMessage('');
            auth.sendPasswordResetEmail(email);
            setMessage('Check your Email for further Instructions')
        }
        catch {
            setError("Failed to reset Password");
        }
    }

    return (
        <div className="for">
            <div className="container">
                
                <div className="forgot">
                    <div className="forgot__header"><h4>Forgot Password</h4></div>
                        <div className="forgot__content">
                        <div className="forgot__image">
                            <img src={loginImg} />
                        </div>
                        { message && <span>{message}</span>}
                        <form className="forgot__form">
                            <div className="forgot__form__group">
                                <FormInput 
                                    type="email" 
                                    name="email" 
                                    handleChange={e => setEmail(e.target.value)}
                                    value={email} 
                                    label="Email"
                                    required 
                                />
                            </div>
                            <div className="forgot__footer">
                                <div className="btn">
                                    <CustomButton onClick={resetPassword}>Reset Password</CustomButton>
                                    {/** <CustomButton 
                                        onClick={signInWithGoogle} isGoogleSignIn> 
                                        SignIn with Google
                                    </CustomButton>*/}
                                </div>
                            </div>
                                
                                { error && <span>{error}</span>}
                                <div className="forgot__pass">
                                    <Link to='/sign' style={{
                                            margintop: "10px",
                                            textDecoration: "none",
                                            color: "black"
                                        }}>
                                        Login
                                    </Link>
                                </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
