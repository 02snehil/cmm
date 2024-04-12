import React from "react";
import './Page8.css';
import img8_1 from './img8_1.png';
import img8_2_1 from './img8_2_1.png';
import img8_2_2 from './img8_2_2.png';
import img8_2_3 from './img8_2_3.png';
import img8_2_4 from './img8_2_4.png';


function Page8(){
    return(
        <>
            <div className="Container8-1">
                <div className="img8">
                    <img src={img8_1} alt="img8_1" />
                </div>
                <div className="textcontiner">
                    <div className="heading">
                        <h1 style={{color:'black'}}>Get on the exclusive <br /> Pesto developer <br /> network.</h1>
                    </div>
                    <div className="Points">
                        <div className="Point1">
                            <div className="img8-1">
                                <img src={img8_2_1}  alt="img8_2_1" />
                            </div>
                            <div className="Point1-1">
                                <h3 style={{color:'black'}}>Create your profile</h3>
                            </div>
                        </div>
                        <div className="Point2">
                            <div className="img8-2">
                                <img src={img8_2_2}  alt="img8_2_2" />
                            </div>
                            <div className="Point2-1">
                                <h3 style={{color:'black'}}>Finish an assessment</h3>
                            </div>
                        </div>
                        <div className="Point3">
                            <div className="img8-3">
                                <img src={img8_2_3}  alt="img8_2_1" />
                            </div>
                            <div className="Point3-1">
                                <h3 style={{color:'black'}}>Interview with our talent specialist</h3>
                            </div>
                        </div>
                        <div className="Point4">
                            <div className="img8-4">
                                <img src={img8_2_4}  alt="img8_2_1" />
                            </div>
                            <div className="Point4-1">
                                <h3 style={{color:'black'}}>Get interviews with top product <br />companies</h3>
                            </div>
                        </div>
                    </div>
                    <div className="button1">
                        <button>Join Pestro Today </button>
                    </div>
                </div>
            </div>
            <div className="Container8-2"></div>
        </>
    );
}
export default Page8;