import React from 'react';
import './Page1.css';
import group1 from './group1.png';
import group1_1 from './group1_1.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import Home from './Home';


function Page1() {

    return (
        <>
            <div class="container">
              <div class="text-content">
                  <h1>
                      Find remote jobs with companies
                      <span style={{color:'rgb(236, 227, 128)'}}> that care </span>
                   </h1>
                   <h1>
                     <span style={{color:'rgb(232, 112, 208)'}}> about your work </span> 
                     more than your resume.
                   </h1>
                   <p>
                      Break into a successful remote tech career with Pesto. 
                      Get flexible jobs with direct access to top companies.
                   </p>
                   <p>
                      Average salaries of $80k+  <br /><br />For developers in
                   </p> <br></br>
                   <Router>
                       <Link to="/"><button>Join Pesto today</button></Link>
                       <Routes>
                           <Route path='/' element={<Home />}  />
                       </Routes>
                   </Router>
                    <br></br>
                   <img src={group1} alt='Group1' className='image1'/>
                   <img src={group1_1} alt='Group1_1' className='image2'/>
               </div>
            </div>
        </>
    );
}

export default Page1;
