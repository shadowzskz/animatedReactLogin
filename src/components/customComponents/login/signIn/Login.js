import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CustomButton from '../../../customElements/customButton/CustomButton'
import FormInput from  '../../../customElements/formInput/FormInput'
import auth from '../../../firebase/firebase';

import loginImg from '../../../../assets/logo/logo.svg'
import "./Login.scss"

function Login() {
    
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [error, setError] = useState('')

    const history = useHistory();

    function login(e) {
        e.preventDefault();
        setError('');
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // redirect to dashboard
                history.push('/')
            })
            .catch((e) => setError(e.message))
    }

    return (
        <div className="login">
            <div className="login__header"><h4>Login</h4></div>
                <div className="login__content">
                <div className="login__image">
                    <img src={loginImg} />
                </div>
                <form className="login__form">
                    <div className="login__form__group">
                        <FormInput 
                            type="email" 
                            name="email" 
                            handleChange={e => setEmail(e.target.value)}
                            value={email} 
                            label="Email"
                            required 
                        />
                    </div>
                    <div className="login__form__group">
                        <FormInput 
                                type="password" 
                                name="passoword" 
                                handleChange={e => setPassword(e.target.value)}
                                value={password} 
                                label="Password"
                                required 
                            />
                    </div>
                    { error && <span>{error}</span>}
                    <div className="login__footer">
                        <div className="btn">
                            <CustomButton onClick={login}>Login</CustomButton>
                            {/** <CustomButton 
                                onClick={signInWithGoogle} isGoogleSignIn> 
                                SignIn with Google
                            </CustomButton>*/}
                        </div>
                    </div>
                </form>
            </div>
            <div className="login__forgot">
                <Link to='/forgot' style={{
                            textDecoration: "none",
                            color: "black"
                }}>
                Forgot Password</Link>
            </div>    
        </div>
    )
}

export default Login