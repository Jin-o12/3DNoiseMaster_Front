import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import useDynamicCss from '../hooks/useDynamicCss.js'
import LoadingComponent from '../module/loading.js';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://your-backend-server.com/login', { username, password });                  // 백엔드 서버에 로그인 요청
            if (response.data.auth) {
                localStorage.setItem('token', response.data.token);                                                             // JWT 토큰을 로컬 스토리지에 저장
                // 보호된 페이지로 이동
                navigate('/protected');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

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

                    <Link
                        to={{ pathname: '/workSpace', state: data }}
                        className="submit"
                    >
                        submit
                    </Link>
                    <div className="spacer"></div>

                    <Link to="/signUp" className="signUp">sign-up</Link>
                </form>
            </div>
        </div>
    );
}
export default Login;
