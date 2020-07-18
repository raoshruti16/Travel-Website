import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './page.css';

function Japan(){
    return(
        <React.Fragment>
          <hr/><hr/>
        <h1 className="title">Japan</h1>
        <hr/>
        <div style={headstart}>
          <div>
              <h2> Tokyo – Essence Of Japan </h2>
              <img src="../images/Japan1.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Kyoto Imperial Palace<br/>
                Philosopher’s Walk<br/>
                Fushimi-Inari Taisha Shrine<br/>

                <h2>Best Things to do:</h2>
                <br/>
                Spend an evening near the Tokyo Tower in Japan<br/>
                 Shop in Odaiba  <br/>
                Witness the grandeur of the Meiji Shrine<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/japan" className="linktext">Book Now</a></button>
                <br/>
                </div>
             </div>
          

             <div style={headstart}>
          <div>
              <h2> Kyoto – Sacred And Serene </h2>
              <img src="../images/Japan2.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Tokyo Disneyland<br/> 
                Tokyo Skytre <br/>
                Tokyo DisneySea<br/>

                <h2>Best Things to do:</h2>
                <br/>
                Visit the Kiyomizu Temple<br/>
                Explore the Nijo Castle<br/>
                Visit the famous Kinkaku-ji<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/japan" className="linktext">Book Now</a></button>
                <br/>
                </div>
             </div>


             <div style={headstart}>
          <div>
              <h2>  Nara – City Of Culture </h2>
              <img src="../images/Japan3.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Nara Park<br/>
                Kasuga-taisha<br/>
                Ninja Museum of Igaryu<br/>

                <h2>Best Things to do:</h2>
                <br/>
                Visit the Isuien Garden<br/>
                Befriend the deers at the Nara-koen Park<br/>
                Explore the Nara National Museum<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/japan" className="linktext">Book Now</a></button>
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
export default Japan;