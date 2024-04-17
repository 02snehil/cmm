import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { auth } from './firebase';

function Welcome() {
  const navigate = useNavigate(); // Add this line to get the navigate function

  const email = localStorage.getItem('email');

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Clear the browser history when the user tries to navigate away
      localStorage.removeItem('email');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('email');
    
    auth.signOut().then(() => {
      navigate('/login');
    }).catch((error) => {
      console.error("Logout Failed:", error.message);
    });
  };

  return (
    <div>
      <h2>Welcome, {email}!</h2>
      <h4>This is your dashboard.</h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Welcome;




