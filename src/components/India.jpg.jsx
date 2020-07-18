import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './page.css';

function India(){
    return(
        <React.Fragment>
          <hr/><hr/>
        <h1 className="title">India</h1>
        <hr/>
        <div style={headstart}>
          <div>
              <h2>Kerala: Known For Its Backwaters</h2>
              <img src="../images/India1.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Munnar<br/>
                Periyar National Park<br/>
                Kovalam beaches<br/>
                Alleppey<br/>

                <h2>Best Things to do:</h2>
                <br/>
                Kathakali dance performance<br/>
                tour the tea estates<br/>
                houseboat ride in the backwaters<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/india" className="linktext">Book Now</a></button>
                <br/>
                </div>
             </div>
          

             <div style={headstart}>
          <div>
              <h2> Gangtok: Ideal For Nature Lovers!</h2>
              <img src="../images/India2.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Tashi View Point<br/> 
                Hanuman Tok<br/>
                Enchey Monastery<br/>

                <h2>Best Things to do:</h2>
                <br/>
                River rafting<br/>
                Yak safari<br/>
                Mountain biking<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/india" className="linktext">Book Now</a></button>
                <br/>
                </div>
             </div>


             <div style={headstart}>
          <div>
              <h2>Ladakh – Famous Film-Spot!</h2>
              <img src="../images/India3.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Zanskar Valley<br/>
                Pangong Tso Lake<br/>
                Nubra Valley<br/>

                <h2>Best Things to do:</h2>
                <br/>
                Chadar trek<br/>
                Stok Kangri Trek<br/>
                Ice hockey, and rock climbing<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/india" className="linktext">Book Now</a></button>
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
export default India;