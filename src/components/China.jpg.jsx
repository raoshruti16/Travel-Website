import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './page.css';

function China(){
    return(
        <React.Fragment>
          <hr/><hr/>
        <h1 className="title">China</h1>
        <hr/>
        <div style={headstart}>
          <div>
              <h2> Forbidden City </h2>
              <img src="../images/China1.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Boating On River Li<br/>
                Interact With The Cute Pandas<br/>
                Hike The Floating Mountains<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/china" className="linktext">Book Now</a></button>
                <br/><br/><br/><br/><br/><br/><br/><br/>
            
                </div>
             </div>
          

             <div style={headstart}>
          <div>
              <h2>Great Wall Of China</h2>
              <img src="../images/China3.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Taste The Hot Pot Of Sichuan<br/> 
                Experience The Best Of Kite Flying<br/>
                Kashgar’s Sunday Market<br/>

             
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/china" className="linktext">Book Now</a></button>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
             </div>


             <div style={headstart}>
          <div>
              <h2> West Lake, Hangzhou </h2>
              <img src="../images/China2.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Bamboo Tube Rice<br/>
                Ancient Art In Mogao Grottoes<br/>
                Taste The Xiaolongbao In Shanghai<br/>
                Meet And Greet The Locals<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/china" className="linktext">Book Now</a></button>
                <br/><br/><br/><br/><br/><br/><br/><br/>
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
export default China;