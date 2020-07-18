import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './page.css';

function Aus(){
    return(
        <React.Fragment>
          <hr/><hr/>
        <h1 className="title">Australia</h1>
        <hr/>
        <div style={headstart}>
          <div>
              <h2> Great Ocean Road – Spectacular Formations</h2>
              <img src="../images/Aus1.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Port Campbell National Park<br/>
                Otway National Park<br/>
                Picturesque rain forest<br/>

                <h2>Best Things to do:</h2>
                <br/>
                Opt to camp at the spectacular sight<br/>
                Beach sports <br/>
                
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/australia" className="linktext">Book Now</a></button>
                <br/>
                </div>
             </div>
          

             <div style={headstart}>
          <div>
              <br/>
              <h2> Blue Mountains National Park – For A Day Trip </h2>
              <img src="../images/Aus2.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Sandstone rock formation towering 900 meters above the Jamison Valley<br/> 
                Majestic views of gorges <br/>
                Exotic wildlife species<br/>

                <h2>Best Things to do:</h2>
                <br/>
                Board the scenic glass roofed Katoomba Railway<br/>
                Hiking, abseiling<br/>
                Rock climbing, mountain biking, and horseback riding<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/australia" className="linktext">Book Now</a></button>
                <br/>
                </div>
             </div>


             <div style={headstart}>
          <div>
              <h2> Fraser Island – For A Pleasant Weather</h2>
              <img src="../images/Aus3.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Lush rain forests<br/>
                Multi-colored sand cliffs heaps of shipwrecks<br/>
                Marine life including dolphins, whales and sharks<br/>

                <h2>Best Things to do:</h2>
                <br/>
                Scuba diving at Lake Mckenzie<br/>
                Swim at Lake Wabby<br/>
                Camp at Lake Boomanjin<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/australia" className="linktext">Book Now</a></button>
                <br/>
                </div>
             </div>
         
        
      </React.Fragment>
    )}
    const headstart = {
      background: '#008080',
      color: 'white',
      textAlign: 'center',
      padding: '10px',
      fontStyle : 'cursive'
    }
export default Aus;