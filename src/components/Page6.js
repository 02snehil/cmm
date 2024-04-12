import React from 'react';
import './Page6.css';
import icon6_1 from './icon6_1.png';
import icon6_2 from './icon6_2.png';
import icon6_3 from './icon6_3.png';
import icon6_4 from './icon6_4.png';


function Page6(){
    return(
        <div className='container6'>
            <div className='heading6'>
                <h1>You're a perfect Pesto fit if you: </h1>
                <p>Unlike generalist job sites, we're in the business to help you,</p>
                <p>not the recruiter. We value transparency.</p> 
            </div>
            <div className='box-container'>
                <div className='box'>
                    <img src={icon6_1} alt='icon6.1' />
                    <p>Have a minimum of 4 years of experience <br /> working on full-stack, MERN stack,<br /> frontend, or backend.</p>
                </div>
                <div className='box'>
                    <img src={icon6_2} alt='icon6.2' />
                    <p>Are in search of a 100% free <br /> platform that charges hiring <br /> partners, not developers.</p>
                </div>
                <div className='box'>
                    <img src={icon6_3} alt='icon6.1' />
                    <p>Don't want to waste time <br /> negotiating the salary you <br /> deserve with recruiters.</p>
                </div>
                <div className='box'>
                    <img src={icon6_4} alt='icon6.1' />
                    <p>Want a lifelong career partner <br /> invested in making you a top <br /> marketable talent.</p>
                </div>
            </div>
        </div>
    );
}
export default Page6;