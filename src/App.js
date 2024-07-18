import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './components/mainPage.js';
import Login from './components/login.js';
import SignUp from './components/signUp.js';
import WorkSpace from './components/workSpace.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/workSpace" element={<WorkSpace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;