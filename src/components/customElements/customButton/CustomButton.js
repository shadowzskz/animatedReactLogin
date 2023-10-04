import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google_signIn' : '' } custon_button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;