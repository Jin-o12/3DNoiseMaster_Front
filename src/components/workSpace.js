import React from 'react';
import { Link } from 'react-router-dom';

import useDynamicCss from '../hooks/useDynamicCss.js'
import LoadingComponent from '../module/loading.js';

function WorkSpace() {
  useDynamicCss('/assets/workSpace.css');
  return (
      <div>
          <LoadingComponent name="./workSpace.js"></LoadingComponent>
          <div className="title-container">
            <h2>User's Work Space</h2>
            <Link to="/mainPage" className="logout">LOG OUT</Link>
          </div>

          <div className="page_container_fileNum">
            <div>
              <h2>전체</h2>
              <h1>{/* 여기에 전체 파일 수를 표시할 데이터 연결 */}</h1>
            </div>
            <div> 
              <h2>진행중</h2>
              <h1>{/* 여기에 진행 중인 파일 수를 표시할 데이터 연결 */}</h1>
            </div>
            <div>
              <h2>완료됨</h2>
              <h1>{/* 여기에 완료된 파일 수를 표시할 데이터 연결 */}</h1>
            </div>
          </div>

          <div className="page_container_fileList">
            {/* 파일 목록 컴포넌트 추가 */}
          </div>
      </div>
  );
}
export default WorkSpace;
