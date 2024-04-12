import React from "react";
import './Page7.css';
import img7_1 from './img7_1.png';
import img7_2 from './img7_2.png';
import img7_3 from './img7_3.png';
import img7_4 from './img7_4.png';
import img7_5 from './img7_5.png';

function Page7(){
    return(
        <>
            <div className='Container7'>
                <div className="Container-text">
                   <h1 style={{color:'black', textAlign:"center", marginTop:'2%'}}>Top developers love Pesto. Here's why:</h1>
                   <p style={{color:'black'}}>We get the recruiters to you. We help you thrive. We only work with the best in the business.</p>
                   <h3 style={{textAlign:"center"}}>But that's not all.</h3>
                </div>
            </div>    
            <div className="division7-1">
               <div className="grid-container1">
                    <div className="div7-1">
                        <img src={img7_1} alt="imag7-1" />
                        <h2 style={{color:'black'}}>Guarantee job security with a platform that looks out for you.</h2>
                        <p style={{color:'black',textAlign:'start'}}>Pesto offers full term health insurance and assists you with all contractual paperwork during hiring. We keep your employers accountable every step of the way.</p>   
                    </div>
                    <div className="div7-2">
                        <img src={img7_2} alt="imag7-4" className="img7_4" />
                        <h2 style={{color:'black'}}>Join a global dev aggregate.</h2>
                        <p style={{color:'black',textAlign:'start'}}>Local recognition does not cut it anymore. Get vetted and join a curated list of top developers from around the world.</p>
                    </div> 
                </div>
            </div>
            <div className="division7-2">
                <div className="grid-container2">
                    <div className="div7-3">
                         <h2 style={{color:'black'}}>Find a lifelong career partner.</h2>
                         <p style={{color:'black',textAlign:'start'}}>Your journey with Pesto doesn’t end when you land a job. Use our platform to find exciting career growth opportunities when you want to switch jobs, and find mentors for life.</p>
                    </div>
                    <div className="div7-3-image">
                       <img src={img7_3} alt="imag7-3" />
                    </div>
                </div>
                <div className="grid-container3">
                    <div className="div7-4">
                          <h2 style={{color:'black'}}>Attend events with speakers you look up to.</h2>
                          <p style={{color:'black', alignContent:'start'}}>Access live community events, monthly town-halls, work shops and more with Pesto Alums and guest speakers throughout the year.</p>
                          <img src={img7_5} alt="imag7-5" />
                    </div>
                </div>               
              
                
            </div>
            <div className="grid-container4">
                <div className="div7-5-image">
                     <img src={img7_4} alt="imag7-4" />
                </div>
                <div className="div7-5">
                     <h2 style={{color:'black'}}>Get deals and benefits that last a lifetime.</h2>
                     <p style={{color:'black',textAlign:'start'}}>Access premium deals, subscriptions and discounts for top dev tools in the market, exclusive for Pesto members.</p>
                </div>
            </div>

        </>
        
    );
}

export default Page7;
