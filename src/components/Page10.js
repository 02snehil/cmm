import React from "react";
import './Page10.css';
import img10_1 from './img10_1.png';
import img10_1_1 from './img10_1_1.png';
import img10_1_2 from './img10_1_2.png';
import img10_1_3 from './img10_1_3.png';
import img10_1_4 from './img10_1_4.png';

function Page10(){
    return(
        <>
            <div className="Container10">
                <div className="heading10">
                    <h1 style={{color:"black"}}>Backed by the best in business.</h1>
                </div>
                <div className="AllReview">
                    <div className="reviews10">
                        <div className="content">
                            <p style={{color:"black"}}><b>
                             The Pesto Tech team is<br />
                             building something I’ve<br />
                             personally wished existed<br />
                             when I first started building<br />
                             software: An efficient way<br />
                             to hire high-quality<br />
                             engineers without the pain<br />
                             of trial and error.“</b>
                            </p>
                            <br />
                            <h4 style={{color:"black"}}>Hiten Shah</h4>
                            <p style={{color:"#494848",}}>Founder and CEO, Nira</p>
                        </div>
                        <div className="img">
                            <img src={img10_1} alt="img10_1" />
                        </div>
                    </div>
                    <div className="images10">
                         <img src={img10_1_1} alt="img10_1_1" />
                         <img src={img10_1_2} alt="img10_1_2" />
                         <img src={img10_1_3} alt="img10_1_3" />
                         <img src={img10_1_4} alt="img10_1_4" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Page10;