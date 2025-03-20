import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import MyJob from '../pages/MyJob';
import Profile from '../pages/Profile';

function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/MyJob" element={<MyJob />} />
                <Route path="/Profile" element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes