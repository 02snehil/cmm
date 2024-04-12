import React from 'react';
import './Page4.css';
import group4_1 from './group4_1.jpg';
import s1 from './s1.png';
import s2 from './s2.png';
import s3 from './s3.png';

function Page4(){

   return(
       <>
          <div class="container">
               <div className='textContainer'>
                 <h1> <span style={{color:" rgb(193, 158, 92)"}}>Make yourself marketable. </span> Let <br /> recruiters judge you on actual<br /> work, not just a resume.</h1>
                 {/* <div>
                  <button> Join Pesto today </button>
                 </div> */}
                 
               </div>
               <div className='img-container'>
                 <div className='img-content'>
                   <img src={s1} alt='s1' />
                   <div className='paragraph' >
                     <p><b>Built a profile for free</b></p>
                     <p>Qualify for jobs at top product startups</p><br/><br/>
                   </div>
                 </div>
                 <div className='img-content'>
                   <img src={s2} alt='s2' />
                   <div className='paragraph'>
                     <p><b>Stand out to recruiters</b></p>
                     <p>Globally-competitive salary based on your skills.</p><br/><br/>
                   </div>
                 </div>
                 <div className='img-content'>
                   <img src={s3} alt='s3' />
                   <div className='paragraph'>
                     <p><b>Get offers with zero salary negotiations.</b></p>
                     <p>Get interviews on your calendar directly</p>
                   </div>
                 </div>
               </div>
         </div>              
       </>
   );
}
export default Page4;
