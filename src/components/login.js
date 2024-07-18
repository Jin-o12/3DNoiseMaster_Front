import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import useDynamicCss from '../hooks/useDynamicCss.js'
import LoadingComponent from '../module/loading.js';

function Login() {
    /*user information */
    const [userid, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = async (event) => {
        event.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));


        try {
            const response = await axios.post('http://localhost:5000/api/user/login/', {
                userid: userid,
                password: password
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const result = response.data;
            
            if (response.data.auth) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem("userid", result.userid);
                localStorage.setItem("password", result.password);
                console.log("login success");
                navigate("/workSpace");                                                           
            } else {
                setError(response.data.message);                            
            }
        } catch (error) {
            console.error('Error logging in', error);
            if (error.response && error.response.data && error.response.data.message) {
              setError(error.response.data.message);
            } else {
              setError('An error occurred during login');
            }
        }
    };

    useDynamicCss('/assets/login.css');

    return (
        <div>
            <LoadingComponent name="./login.js"></LoadingComponent>
            <div className="login-container">
                <h2>LOGIN</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <label htmlFor="userid">ID<br /></label>
                    <input
                        type="text"
                        id='userid'
                        className='id'
                        value={userid}
                        onChange={(e) => setUserID(e.target.value)} 
                        required 
                    />

                    <label htmlFor="password">PASSWORD<br /></label>
                    <input 
                        type="password"
                        id='password'
                        className='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type='submit' className="submit">submit</button>
                    <div className="spacer"></div>

                    {error && <p className="error-message">{error}</p>}

                    <Link to="/signUp" className="signUp">sign-up</Link>
                </form>
            </div>
        </div>
    );
}
export default Login;
