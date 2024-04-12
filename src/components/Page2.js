import React from 'react'; 
import group2 from './group2.jpg';
import './Page2.css'; 

function Page2() {
    return (
        <div className="Page2" style={{ backgroundColor: 'white' }}>
         
            <img src={group2} alt="Group 2" className="centered-img" />
        </div>
    );
}
export default Page2;

