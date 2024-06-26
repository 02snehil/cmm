import React from "react";
import { useState } from "react";
import './Page11.css';
import plus from './plus.png';

function Page11(){

    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return(
        <>
            <div className="Container11">
                <div className="section1">
                    <h1 style={{color:'black'}}>
                       Frequently Asked<br /> Questions
                    </h1>
                    <h4> <span style={{color:'#494848'}}>Have more questions? Contact our support team <br />
                        to get what you need.</span> <a href="mailto:support@pesto.tech" style={{textDecoration: 'underline', color: '#494848'}}>support@pesto.tech</a>
                    </h4>
                </div>
                <div className="Questions">

                    <div className="question" onClick={toggleAnswer}>
                        <h4>What kind of tech companies will I work with?</h4>
                        <img src={plus} alt="plus" className="plus" />
                    </div>
                    {showAnswer && (
                        <div>
                            <h5>Your answer goes here.</h5>
                        </div>
                    )}

                    <hr className="hr-line"/>
                    <div className="question">
                        <h4>Do you provide a placement guarantee?</h4>
                        <img src={plus} alt="plus" className="plus" />
                    </div>
                    {showAnswer && (
                        <div>
                            <h5>Your answer goes here.</h5>
                        </div>
                    )}

                    <hr className="hr-line"/>

                    <div className="question" onClick={toggleAnswer}>
                        <h4>Can I pursue a second job alongside the one I get from Pesto?</h4>
                        <img src={plus} alt="plus"  className="plus"/>
                    </div>
                    {showAnswer && (
                        <div>
                            <h5>Your answer goes here.</h5>
                        </div>
                    )}

                    <hr className="hr-line" />

                    <div className="question" onClick={toggleAnswer}>
                        <h4>Can I pursue a second job alongside the one I get from Pesto?</h4>
                        <img src={plus} alt="plus"  className="plus"/>
                    </div>
                    {showAnswer && (
                        <div>
                            <h5>Your answer goes here.</h5>
                        </div>
                    )}

                    <hr className="hr-line" />

                    <div className="question" onClick={toggleAnswer}>
                        <h4>Will I be a full-time employee or a remote contractor?</h4>
                        <img src={plus} alt="plus" className="plus" />
                    </div>
                    {showAnswer && (
                        <div>
                            <h5>Your answer goes here.</h5>
                        </div>
                    )}

                    <hr className="hr-line" />

                    <div className="question" onClick={toggleAnswer}>
                        <h4>Can I get a high-paying WFO/hybrid job with Pesto?</h4>
                        <img src={plus} alt="plus" className="plus" />
                    </div>
                    {showAnswer && (
                        <div>
                            <h5>Your answer goes here.</h5>
                        </div>
                    )}

                    <hr className="hr-line" />

                    <div className="question" onClick={toggleAnswer}>
                        <h4>What if my job requires a workstation setup I don’t have access <br />to?</h4>
                        <img src={plus} alt="plus" className="plus" />
                    </div>
                    {showAnswer && (
                        <div>
                            <h5>Your answer goes here.</h5>
                        </div>
                    )}

                    <hr className="hr-line" />

                    <div className="question" onClick={toggleAnswer}>
                        <h4>What to do if I lose my job? Will Pesto help me to secure <br />another job?</h4>
                        <img src={plus} alt="plus" className="plus" />
                    </div>
                    {showAnswer && (
                        <div>
                            <h5>Your answer goes here.</h5>
                        </div>
                    )}
                    
                </div>
            </div>
        </>
    );
}
export default Page11;
