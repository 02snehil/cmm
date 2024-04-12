import React from 'react';
import './Page5.css';
import group5 from './group5_1.png';

function Page5(){
    return(
        <>
           <div className='heading'>
                <h1 style={{color:'rgba(152, 109, 234, 1)', textAlign:'center'}}>
                        Pesto curates developers
                        <span style={{color:'black'}}> who are ready <br />for the next big opportunity</span>
                </h1>
                 
            </div>
               <div className="div2">
                  <div>
                    <img src={group5} /></div>
                    <div className='div3'>
                        <p>"Pesto opened the door to a world of transformation and <br />
                            innovation for me. They taught me the power of <br />
                            connections and the endless possibilities of web3 <br />
                            technology."</p> <br /><br /><br /><br />
                        <p><b>Manas Goel</b></p> 
                        <p>Founding Engineer</p>   
                    </div>
               </div>
           
        </>
    )
}
export default Page5;