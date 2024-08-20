import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import RoomAdministration from './components/RoomAdministration';
import Business from './components/Business';
import Property from './components/Property'
// import StudentAdministration from './components/StudentAdministration';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/business" element={<Business/>}/>
                <Route path="/property" element={<Property/>}/>
                {/* <Route path="/students" element={<StudentAdministration />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
