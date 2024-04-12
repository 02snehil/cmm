import React from "react";
import './Page9.css';
import img9_1 from './img9_1.png';
import img9_2 from './img9_2.png';
import img9_3 from './img9_3.png';
import img9_5 from './img9_5.png';


function Page9(){
    return(
        <>
             <div className="heading9">
                <h1 style={{color:'black'}}>Why <span style={{color:'#986DEA'}}>leading developers </span>around <br /> the world choose pestro</h1>
             </div>
             <div className="boxes1">
                <div className="review1">
                    <p style={{alignItems:'start',color:'black'}}>"I was looking for a job in the software engineering field with a remote work option. <span style={{color:'#8C57F1'}}>Pesto understood my needs and helped me find several companies that were a good fit.</span> They also provided me with resume and interview coaching, which helped me land my dream job. I would 
                        like to extend my heartfelt appreciation to Ayush, Ishan, and Sourabh for making this remarkable outcome possible."
                    </p>
                    <div className="details1">
                        <div className="image1">
                          <img src={img9_1} alt='img9_1' />
                        </div>
                        <div className="intro1">
                          <h3>Rushikesh Akhare </h3> 
                          <h4>Solutions Engineer</h4>
                        </div>
                    </div>    
                </div>
                <div className="review2">
                   <p style={{alignItems:'start',color:'white'}}>"I was most impressed with Pesto's ability to assess
                        my skills and craft an outstanding profile that resulted
                        in interview opportunities within just two weeks. I also
                        appreciated the fact that the interview and onboarding
                        experience was seamless. Pesto was always available
                        to answer my questions and provide support. I would
                        definitely recommend Pesto to other software
                        engineers who are looking for a remote job."
                    </p>
                    <div className="details1">
                        <div className="image1">
                          <img src={img9_2} alt='img9_2' />
                        </div>
                        <div className="intro2">
                          <h3>Krishnakant Sharma </h3> 
                          <h4>Backend + Web3 Developer</h4>
                        </div>
                    </div>
                </div>
                <div className="review3">
                  <p style={{alignItems:'start',color:'black'}}>"Pesto Tech helped me boost my income by 8x. They
                    helped me get placed in a YC startup and gave me the
                    right skills and guidance I needed.
                 </p>
                 <p style={{color:'#8C57F1'}}>I highly recommend Pesto Tech to anyone who is
                    looking to advance their career and increase their
                    income".
                 </p>
                    <div className="details1">
                        <div className="image1">
                          <img src={img9_3} alt='img9_3' />
                        </div>
                        <div className="intro3">
                          <h3>Kunal Bhatia</h3> 
                          <h4>Senior Software Engineer</h4>
                        </div>
                    </div>
                </div>
             </div>
             <div className="boxes2">
             <div className="review4">
                    <p style={{alignItems:'start',color:'black'}}>"Pesto's resume-building exercise was incredibly
                        helpful in getting my resume noticed by employers.  
                        <span style={{color:'#8C57F1'}}> I also appreciated the fact that they were always
                        available to answer my questions, even after I had
                        accepted a job offer.</span>
                    </p>
                    <p style={{alignItems:'start',color:'black', justifyContent:'start'}}>I would definitely recommend Pesto to other software
                       developers who are looking for a job."</p>
                    <div className="details2">
                        <div className="image4">
                         <img src={img9_5} alt='img9_5' />
                        </div>
                        <div className="intro4">
                          <h3>Akshay Kumar </h3> 
                          <h4>Senior Software Engineer</h4>
                        </div>
                    </div>    
                </div>
                <div className="review5">
                   <p style={{alignItems:'start',color:'white'}}>
                   "The most helpful aspect of Pesto Labs was the
                    mentorship program. I was paired with an experienced
                    software engineer who helped me with my technical
                    skills and career development.
                   </p>
                   <p style={{alignItems:'start',color:'white'}}>
                     I also found the tech talks and meet-ups to be very
                     valuable. It was great to connect with other software
                     engineers and learn from their experiences."
                   </p>
                    <div className="details2">
                        <div className="image5">
                          <img src={img9_5} alt='img9_5' />
                        </div>
                        <div className="intro5">
                          <h3>Sourav Das </h3> 
                          <h4>Senior Software Engineer</h4>
                        </div>
                    </div>
                </div>
                <div className="review6">
                  <p style={{alignItems:'start',color:'black'}}>"Pesto Tech helped me boost my income by 8x. They
                    helped me get placed in a YC startup and gave me the
                    right skills and guidance I needed.
                 </p>
                 <p style={{color:'#8C57F1'}}>I highly recommend Pesto Tech to anyone who is
                    looking to advance their career and increase their
                    income".
                 </p>

                    <div className="details2">
                        <div className="image6">
                         <img src={img9_5} alt='img9_5' />
                        </div>
                        <div className="intro6">
                          <h3>Kunal Bhatia</h3> 
                          <h4>Senior Software Engineer</h4>
                        </div>
                    </div>
                </div>
             </div>
        </>
    );
};
export default Page9;