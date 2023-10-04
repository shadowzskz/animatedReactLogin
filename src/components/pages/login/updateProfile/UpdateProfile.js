import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CustomButton from '../../../customElements/customButton/CustomButton'
import FormInput from  '../../../customElements/formInput/FormInput'
import { useStateValue } from '../../../../context/StateProvider';
import loginImg from "../../../../assets/logo/update.svg";
import "./UpdateProfile.scss";

function UpdateProfile() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState(); 
    const [confirmPassword, setConfirmPassword] = useState(); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [{ user }] = useStateValue();   
    const history = useHistory();


    function updatedEmail(email) {
        return user?.updateEmail(email) 
    }

    function updatedPass(pass) {
        return user?.updatePassword(pass) 
    }

    function register(e) {
        e.preventDefault();

        if (password!== confirmPassword) {
            return setError('Passwords dont match')
        }
        
        const promises = [];
        setLoading(true);
        setError('');
        
        if (email!== user.email) {
            promises.push(updatedEmail(email))
        }
        if (password) {
            promises.push(updatedPass(password))
        }

        Promise.all(promises).then(() => {
            history.push('/');
        }).catch(() => {
            setError('Fail to update the account')
        }).finally(() => {
            setLoading(false)
        })
    }


    return (
        <div className="for">
            <div className="container">
                <div className="update">
                    <div className="update__header"><h4>Update profile</h4></div>
                        <div className="update__content">
                            <div className="update__image">
                                <img src={loginImg} />
                            </div>
                            <form className="update__form">
                            <div className="update__form__group">
                                    <FormInput 
                                        type="email" 
                                        name="email" 
                                        handleChange={e => setEmail(e.target.value)}
                                        defaultValue={user?.email}
                                        value = {email}
                                        required 
                                    />
                                </div>
                                <div className="update__form__group">
                                    <FormInput 
                                            type="password" 
                                            name="passoword" 
                                            handleChange={e => setPassword(e.target.value)}
                                            value={password} 
                                            label="Password"
                                            required 
                                        />
                                </div>
                                <div className="update__form__group">
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
                                        <CustomButton disabled={loading} onClick={register}>Update</CustomButton>
                                    </div>
                                </div>
                                <Link to='/' style={{
                                            margintop: "10px",
                                            textDecoration: "none",
                                            color: "black"
                                        }}>
                                        Cancel
                                    </Link>
                                </form>
                        </div>                
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile
