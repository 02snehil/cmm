
import React, { useEffect, useState } from "react";
import './Login.css';
import plogo from './plogo.jpg';
import video from './video.png';
import google_icon from './google_icon.jpg';
import { signInAnonymously, signInWithPhoneNumber, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { provider, auth } from "./firebase";
import { useNavigate } from "react-router-dom";


function Login() {

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

    const handleGoogleLogin =()=>{
        signInWithPopup(auth,provider)
            .then((data)=>{
               console.log(data.user.email);
               setValue(data.user.email);
               localStorage.setItem('email',data.user.email);
               navigate('/welcome');
            }).catch(error => {
            console.error("Login failed:", error.message);
        });
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'));
    });

    useEffect(() => {
        const handlePopState = () => {
            if (window.location.pathname === '/login') {
                navigate('*'); 
            }
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [navigate]);




    // const [user, setUser] = useState(null);
    // const [error, setError] = useState(null);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             setUser(user);
    //             navigate("/welcome", { state: { username: user.displayName } });
    //         } else {
    //             setUser(null);
    //         }
    //     });   
    //     return () => unsubscribe(); 
    // }, []);

    // const handleGoogleLogin = async () => {
    //     try {
    //         const provider = new GoogleAuthProvider();
    //         const result = await signInWithPopup(auth, provider);
    //         const user = result.user;
    //         console.log("result",result);
    //         setUser(user);
    //         navigate('/welcome', { state: { username: user.displayName } });
    //     } 
    //     catch (error) {
    //         console.error(error);
    //         setError("Failed to sign in with Google.");
    //     }
    // };

    // const handleAnonymousLogin = async () => {
    //     try {
    //         const result = await signInAnonymously(analytics);
    //         const user = result.user;
    //         setUser(user);
    //         navigate('/welcome', { state: { username: user.displayName } });
    //     } catch (error) {
    //         console.error(error);
    //         setError("Failed to sign in anonymously.");
    //     }
    // };

    // const handlePhoneNumberLogin = async (phoneNumber) => {
    //     try {
    //         const result = await signInWithPhoneNumber(analytics, phoneNumber);
    //         // Handle verification process for phone number login
    //         // e.g., navigate to verification page
    //     } catch (error) {
    //         console.error(error);
    //         setError("Failed to sign in with phone number.");
    //     }
    // };

    // const handleEmailVerification = async (email) => {
    //     try {
    //         await sendEmailVerification(user);
    //         setError("Email verification sent.");
    //         // Handle email verification process
    //         // e.g., show a message to the user
    //     } catch (error) {
    //         console.error(error);
    //         setError("Failed to send email verification.");
    //     }
    // };

    return(
        <>
            <div className="container_Login">
                <div className="logo_login">
                  <img src={plogo} alt="plogo" />
                  <hr className="hr1" />
                </div>
                <div className="content_login">
                    <div className="video_login">
                      <h2>Pesto developer get hired 3x faster!</h2>
                       <a href="https://youtu.be/6seL_erGiWE"><img src={video} alt='video' /> </a>
                    </div>
                    <div className="authentication_login">
                        <div className="heading_login">
                          <p className="p1"> <b>Welcome Back</b></p>
                          <p className="p2">Login to continue learning</p><br />
                        </div>
                        <div className="fill_details">
                            <div className="signin">
                               Sign in as
                            </div>
                            <div className="developer">
                                <input type="radio" name="login" />&emsp;Developer
                            </div>
                            <div className="Hiring">
                              <input type="radio" name="login" />&emsp;Hiring Partner
                            </div>
                        </div>
                        <div className="email_login">
                             Email <br />
                             <input type="email" name="email" required className="email"/> <br />
                             <button  type="submit" className="login_button">Next</button>                           
                        </div>
                        <div className="or-container_login">
                           <hr className="hr2_login" />
                           <div className="or-text_login">or</div>
                           <hr className="hr3_login" />
                        </div>
                       <br /> 
                   </div>
               </div>
                 <button className="buttonlogin" onClick={handleGoogleLogin}>
                    <img src={google_icon} alt="login logo" className="google_icon_login" />Sign up with Google
                 </button>
                 <h4 className="login_link">
                    <span style={{fontWeight:'500'}}>Don't have an account? </span>
                    <a href="/register" style={{textDecoration:'none',color:'black'}}>Register</a>
                 </h4>
            </div>
        </>
    );
}
export default Login;