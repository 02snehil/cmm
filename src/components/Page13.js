import React from "react";
import './Page13.css';
import logo from './logo.svg';
import insta from './insta.png';
import twit from './twit.png';
import web from './web.png';
import tube from './tube.png';
import { Link } from "react-router-dom";


function Page13(){

    return(
        <>
              <div className="container13">
                 <div className="heading">
                     <div className="logos">
                         <div className="logo">
                            <img src={logo} alt="logo" />
                         </div>
                         <div className="discription">
                             <div className="companyName">
                                 <h1 style={{ color:'white'}}>Credmarg</h1>
                                 <h6 style={{color:'white'}}>3rd Floor, Cowork Valley, MMS Divya Diamonds Junction, Kavuri Hills <br />
                                    Hills Phase 2 Rd, Hyderabad, Telangana 500033</h6>
                             </div>
                             <div className="hyperlinks">
                                <a href ='about' style={{textDecoration:'none'}}><img src={insta} alt="insta" /> </a>
                                <a href ='about' style={{textDecoration:'none'}}><img src={web} alt="web" /></a>
                                <a href ='about' style={{textDecoration:'none'}}><img src={twit} alt="twit" /></a>
                                <a href ='about' style={{textDecoration:'none'}}><img src={tube} alt="tube" /></a>
                             </div>
                         </div>
                     </div>
                     <div className="details">
                        <div className="company">
                            <h3>
                                <span style={{color:'white'}}>Company</span><br /> 
                                 <a href="about" style={{textDecoration: 'none', color:"black"}}>About us</a> <br /> 
                                 <a href="about" style={{textDecoration: 'none', color:"black"}}>Blog </a> <br /> 
                                 <a href="about" style={{textDecoration: 'none', color:"black"}}>Home</a>
                            </h3> 
                        </div>
                        <div className="legal">
                            <h3>
                                <span style={{color:'white'}}>Legal</span><br />
                                <a href="about" style={{textDecoration: 'none', color:"black"}}>Terms of Use</a> <br /> 
                                <a href="about" style={{textDecoration: 'none', color:"black"}}>Privacy Policy</a> <br /> 
                                <a href="about" style={{textDecoration: 'none', color:"black"}}>Refund Policy</a>
                            </h3>
                        </div>
                        <div className="support">
                            <h3 >
                                <span style={{color:'white'}}>Support</span><br />
                                <a href="about" style={{textDecoration: 'none', color:"black"}}>contact@Credmarg.com </a><br /> 8341666036 <br /> 
                                <a href="about" style={{textDecoration: 'none', color:"black"}}>delete My Account</a>
                            </h3>
                        </div>
                     </div>
                 </div>
                 <div className="content">
                    <h4 style={{color:'white'}}>
                      Credmarg technologies pvt. Ltd.(Credmarg) is neither a stock 
                      exchange nor does it intend to get recognized as a stock exchange 
                      under the Securities Contracts Regulation Act, 1956. Credmarg 
                      technolgies Pvt Ltd is not authorized by the capital markets 
                      regulator to solicit investments. The securities traded on these 
                      platforms are not traded on any regulated exchange. Credmarg also
                      provides that it does not facilitate any online or offline buying, 
                      selling, or trading of securities.
                    </h4>
                    <h4 style={{color:'white'}}>
                       This Site will be updated on a regular basis.
                    </h4>
                    <h4 style={{color:'white'}}>
                      Credmarg Technologies Private Limited (CIN-: U72900TG2022PTC162824)Registered 
                      Contact: +91 83416 66036 (contact@Credmarg.com)
                    </h4>
                 </div>
                 <div className="copyright">
                     <p style={{color:'white'}}>
                        Copyright © 2022 Credmarg All rights reserved
                     </p>
                 </div>
              </div>
        </>
    );
}
export default Page13;