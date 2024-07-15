import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './components/mainPage.js';
import Login from './components/login.js';
import SignUp from './components/signUp.js';
import WorkSpace from './components/workSpace.js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/workSpace" element={<WorkSpace />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
