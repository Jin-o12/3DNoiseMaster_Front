import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useDynamicCss from '../hooks/useDynamicCss.js'

import LoadingComponent from '../module/loading.js';

function MainPage() {
    useDynamicCss('/assets/mainPage.css');

    return (
        <div>
            <LoadingComponent name="./mainPage.js"></LoadingComponent>
            <div className="title-container">
                <h2>3D Mesh Master</h2>
                <Link to="/login" className="login">LOG IN</Link>
            </div>

            <div className="page_container_1">
                <h1>
                    3D메쉬 잡음제거 및<br />
                    자체 학습을 통한 추가 기능 지원<br />
                </h1>
                <h5>
                    3D 모델의 잡음 제거 및 오차율 측정 기능을 제공하며<br />
                    혹은 연구를 위해 잡음을 임의로 생성할 수도 있습니다<br />
                </h5>
                <Link to="/workSpace" className="workSpace">Get Denoising the 3D mesh</Link>
            </div>
        </div>
    );
}

export default MainPage;
