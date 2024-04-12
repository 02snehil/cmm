import React from 'react';
import './Page1.css';
import group1 from './group1.png';
import group1_1 from './group1_1.png';


function Page1() {
    return (
        <>
            <div class="container">
              <div class="text-content">
               <h1>Find remote jobs with companies<spam style={{color:'rgb(236, 227, 128)'}}> that care </spam></h1>
               <h1><spam style={{color:'rgb(232, 112, 208)'}}> about your work</spam> more than your resume.</h1>
               <p>Break into a successful remote tech career with Pesto. Get flexible jobs with direct access to top companies.</p>
               <p>Average salaries of $80k+ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; For developers in</p> <br></br>
               <button>Join Pesto today</button> <br></br>
               <img src={group1} alt='Group1' className='image1'/>
               <img src={group1_1} alt='Group1_1' className='image2'/>
              </div>
            </div>
        </>
    );
}

export default Page1;
