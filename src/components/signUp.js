import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import useDynamicCss from '../hooks/useDynamicCss.js'
import LoadingComponent from '../module/loading.js';

function SignUp() {
    /*user information */
    const [userid, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        //비밀번호 확인
        if(password !== confirmPassword) {                                                                                        
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        //데이터 컨테이너(payload) 생성
        const payload = {                                                                                                        
            id: userid,
            password: password,
            name: name,
            phone: phone
        }

        try {
            //서버에 로그인 요청
            const response = await axios.post('http://localhost:5000',
                            payload,
                            {
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            }
                        );

            if (response.data.auth) {
                localStorage.setItem('token', response.data.token);                                                                // JWT 토큰을 로컬 스토리지에 저장
                navigate('/login');                                                                                              // 보호된 페이지로 이동
            } else {
                setError(response.data.message);                                                                                 // 자격 증명 오류 설정
            }
        } catch (error) {
            console.error('Error sign-up', error);
            setError('An error occurred during sign-up');
        }
    };

    useDynamicCss('/assets/signUp.css');
    
    return (
        <div>
            <LoadingComponent name="./signUp.js"></LoadingComponent>
            <div className="signUp-container">
                <h2>SIGN-UP</h2>
                <form className="signUp-form" onSubmit={handleSubmit}>
                    <label htmlFor="userid">ID<br /></label>
                    <input
                        type="text"
                        id='userid'
                        className='id'
                        value={userid}
                        onChange={(e) => setUserID(e.target.value)} 
                        required 
                    />
                    <div className="spacer1"></div>

                    <label htmlFor="password">PASSWORD<br /></label>
                    <input 
                        type="password"
                        id='password'
                        className='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="confirmPassword">PASSWORD CHECK<br /></label>
                    <input 
                        type="password"
                        id='confirmPassword'
                        className='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <div className="spacer1"></div>

                    <label htmlFor="name">NAME<br /></label>
                    <input 
                        type="text"
                        id='name'
                        className='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <div className="spacer1"></div>

                    <label htmlFor="phone">PHONE NUMBER<br /></label>
                    <input 
                        type="text"
                        id='phone'
                        className='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <div className="spacer2"></div>

                    <button type="submit" className="submit">submit</button>
                    <div className="spacer2"></div>

                    {error && <p className="error-message">{error}</p>}

                    <Link to="/login" className="login">login</Link>
                </form>
            </div>
        </div>
    );
}

export default SignUp;