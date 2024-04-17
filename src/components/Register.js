import React, { useEffect, useState } from "react";
import plogo from './plogo.jpg';
import video from './video.png';
import google_icon from './google_icon.jpg';
import './Register.css';
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";

function Register(){

    const navigate = useNavigate();
    const [value,setValue] = useState('');


    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('email');
        };
       
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []); 

    const handleGoogleRegister =()=>{
        signInWithPopup(auth,provider)
            .then((data)=>{
               console.log(data.user.email);
               setValue(data.user.email);
               localStorage.setItem('email',data.user.email);
               navigate('/welcome');
            }).catch(error => {
            console.error("Register failed:", error.message);
        });
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'));
    });

    useEffect(() => {
        const handlePopState = () => {
            if (window.location.pathname === '/register') {
                navigate('*'); 
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [navigate]);


    return(
        <>
          <div className="register">
            <div className="logo_register">
                <img src={plogo} alt="plogo" />
                <hr className="hr1" />
            </div>
            <div className="content_register">
                <div className="video">
                    <h2>Pesto developer get hired 3x faster!</h2>
                    <a href="https://youtu.be/6seL_erGiWE"><img src={video} alt='video' /> </a> <br/><br/><br/><br/><br/><br/><br/>
                </div>
                <div className="authentication">
                   <p className="p1"> <b>Create an account</b></p>
                   <p className="p2">Please enter your details</p>
                   <br />

                   <b>Phone Number*</b> <br /><br />
                   <input type = "number" name="mob"  className="input"/> <br /><br />
                   <b>Name</b> <br /><br />
                   <input type = "text" name="name" className="input" /> <br /><br />
                   <b>Email</b> <br /><br />
                   <input type = "email" name="email" className="input" /> <br /><br />
                   <button className="registerB"> Submit </button>
                   <br /><br />
                   <div className="or-container">
                        <hr className="hr2" />
                        <div className="or-text">or</div>
                        <hr className="hr3" />
                   </div>
                    <br /> 
                </div>
            </div>
            <button onClick={handleGoogleRegister} className="buttonregister"><img src={google_icon} alt="register_logo" className="google_icon" />Sign up with Google</button>
            <h4 className="register_link"><span style={{fontWeight:'500'}}>Have an account? </span><a href="/login" style={{textDecoration:'none',color:'black'}}>Login</a></h4>
       </div>
        </>
    );
}
export default Register;