import React from "react";
import './Page12.css';
import img12 from './img12.png';

function Page12(){

    return(
        <>
             <div className="container12">
                <div className="text12">
                    <div className="heading">
                        <h1>Join the most
                            <span style={{color:'rgba(254, 223, 180, 1)'}}> sought-out <br /></span>
                            <span style={{color:'rgba(252, 160, 221, 1)'}}> developer collective.</span>
                        </h1>
                    </div>
                    <div className="paragraph">
                        <h4>We’ll take care of the boring hiring bits, so you can enjoy the <br />
                            flexibility and freedom you deserve as a top developer.
                        </h4><br /><br />
                        <button className="button12">Built your profile</button>
                    </div>
                </div>
                <div className="image">
                    <img src={img12} alt="img12" />
                </div>
             </div>
        </>
    );
}
export default Page12;