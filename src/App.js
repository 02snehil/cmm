import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <Routes>
         <Route path='/' element={<Main />} />
         <Route path='/home' element={<Home />} />
         <Route path='/aboutus' element={<AboutUs />} />
         <Route path='/blog' element={<Blog />} />
         <Route path='/register' element={<Register />} />
         <Route path='/login' element={<Login />} />
         <Route path='/welcome' element={<Welcome />} />
         <Route path='*' element={<h1 style={{color:'black'}}> PAGE NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
}
export default App;
