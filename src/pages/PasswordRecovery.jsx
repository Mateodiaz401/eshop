import React from 'react';
import '@styles/PasswordRecovery.scss';
import logoyardsale from '@logos/logo_yard_sale.svg'
const RecoveryPassword = () => {
    return (
        <div className="PasswordRecovery">
            <div className="PasswordRecovery-container">
                <img src={logoyardsale} alt="logo" className="PasswordRecovery-logo" />
                <h1 className="title">Password recovery</h1>
                <p className="subtitle">Inform the email address used to create your account</p>
                <form action="/" className="form">
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="text" id="email" className="input input-email" />
                    <input type="submit" value="Confirm" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
};

export default RecoveryPassword;