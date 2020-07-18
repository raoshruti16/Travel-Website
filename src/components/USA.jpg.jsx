import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './page.css';

function USA(){
    return(
        <React.Fragment>
          <hr/><hr/>
        <h1 className="title">United States Of America</h1>
        <hr/>
        <div style={headstart}>
          <div>
              <h2>New York </h2>
              <img src="../images/USA1.jpg"  alt="Snow" className="im"/> 
              <br/>
               <h2>Top Attractions:</h2>
                <br/>
                Statue of Liberty<br/>
                Central Park<br/>
                Empire State Building<br/>Metropolitan Museum of Art<br/>

                <h2>Best Things to do:</h2>
                <br/>
                Visit the High Line<br/>
                Times Square Ball drop on New Year’s Eve <br/>
                Ice skate at the Rockefeller Center on Christmas<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/usa" className="linktext">Book Now</a></button>
                <br/>
                </div>
             </div>
          

             <div style={headstart}>
          <div>
              <h2> Los Angeles</h2>
              <img src="../images/USA2.jpg"  alt="Snow" className="im"/> 
              <br/>
               <h2>Top Attractions:</h2>
                <br/>
                The Getty Center<br/> 
                Griffith Observatory<br/>
                Petersen, Automotive Museum<br/> Universal Studios Hollywood<br/> 

                <h2>Best Things to do:</h2>
                <br/>
                Huntington Library<br/>
                Art Collections <br/>
                Botanical Gardens<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/usa" className="linktext">Book Now</a></button>
                <br/>
                </div>
             </div>


             <div style={headstart}>
          <div>
              <h2>Sedona And The Grand Canyon</h2>
              <img src="../images/USA3.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Devils Bridge<br/>
                Red Rock State Park<br/>
                Blazin’ M Ranch<br/>
                <br/><br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/usa" className="linktext">Book Now</a></button>
                <br/><br/><br/><br/><br/><br/>
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
export default USA;