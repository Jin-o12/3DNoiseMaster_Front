import { Link, useNavigate } from 'react-router-dom';
import LoadingComponent from '../module/loading.js';
import React from 'react';
import useDynamicCss from '../hooks/useDynamicCss.js'

function Login() {
    useDynamicCss('/assets/login.css');

    return (
        <div>
            <LoadingComponent name="./login.js"></LoadingComponent>
            <div className="login-container">
                <h2>LOGIN</h2>
                <form className="login-form">
                    <label htmlFor="id">ID<br /></label>
                    <input type="text" className='id' id="id" name="id" required />

                    <label htmlFor="password">PASSWORD<br /></label>
                    <input type="password" className='password' id="password" name="password" required />

                    <Link to="/workSpace" className="submit">submit</Link>
                    <div className="spacer"></div>
                </form>
                
                <Link to="/signUp" className="signUp">sign-up</Link>
            </div>
        </div>
    );
}

export default Login;
