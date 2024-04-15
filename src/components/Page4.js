import React from 'react';
import './Page4.css';
import group4_1 from './group4_1.png';
import group4_2 from './group4_2.png';
import group4_3 from './group4_3.png';
import s1 from './s1.png';
import s2 from './s2.png';
import s3 from './s3.png';

function Page4(){

   return(
       <>
         <div className='container4'>
             <div className='text'>
                <div className='heading'>
                      <h1 > <span style={{color:" rgb(193, 158, 92)"}}>Make yourself marketable. </span> 
                            Let <br /> recruiters judge you on actual<br /> 
                            work, not just a resume.
                      </h1>
                      
                      <button className='b4'> Join Pesto today </button> 
                </div>
                
                <div className='image_text'>
                  
                    <div className='t1'>
                      <div className='img'>
                        <img src={s1} alt='s1'/>
                      </div>
                      <div className='subtext1'>
                        <p><b>Built a profile for free</b></p>
                        <p>Qualify for jobs at top product startups</p><br/><br/>
                      </div>
                    </div>
                    <div className='t2'>
                     <div className='img2'>
                        <img src={s2} alt='s2'/>
                      </div>
                      <div className='subtext2'>
                        <p><b>Stand out to recruiters</b></p>
                        <p>Globally-competitive salary based on your skills.</p><br/><br/>
                      </div>
                    </div>
                    <div className='t3'>
                      <div className='img3'>
                        <img src={s3} alt='s3'/>
                      </div>
                      <div className='subtext3'>
                        <p><b>Get offers with zero salary negotiations.</b></p>
                        <p>Get interviews on your calendar directly on device</p><br/><br/>
                      </div>
                    </div>
                </div>
             </div>
             <div className='image'>
               <div className='img1'>
                <img src={group4_1} alt='group4_1' />
               </div>
               <div className='img2'>
                 <div className='img2_1'>
                   <img src={group4_2} alt='group4_2' />
                 </div>
                 <div className='img2_2'>
                   <img src={group4_3} alt='group4_3' />
                 </div>
               </div>
             </div>
         </div>
       </>
   );
}
export default Page4;
