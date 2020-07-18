import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './page.css';

function Europe(){
    return(
        <React.Fragment>
          <hr/><hr/>
        <h1 className="title">Europe</h1>
        <hr/>
        <div style={headstart}>
          <div>
              <h2>Best Of Switzerland And France</h2>
              <img src="../images/Europe1.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Interlaken: Mt Jungfrau and Lake Interlaken<br/>
                Lucerne: Mt Titlis and Lake Lucerne<br/>
                Paris: Eiffel Tower, Louvre, Pere Lachaise Cemetery, Montmartre, and Sacre Coeur<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/europe" className="linktext">Book Now</a></button>
                <br/><br/><br/><br/><br/><br/><br/><br/>
            
                </div>
             </div>
          

             <div style={headstart}>
          <div>
              <h2>Through The Lanes Of Italy</h2>
              <img src="../images/Europe2.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Rome: Sistine Chapel, Vatican Museum, Colosseum, and St Peter’s Basilica<br/> 
                Venice: Gondola rides<br/>
                Florence: Statue of David<br/>
                Pisa: Leaning Tower of Pisa<br/>

             
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/europe" className="linktext">Book Now</a></button>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
             </div>


             <div style={headstart}>
          <div>
              <h2>  Nara – City Of Culture </h2>
              <img src="../images/Europe3.jpg"  alt="Snow" className="im"/> 
              <br/><br/>
               <h2>Top Attractions:</h2>
                <br/>
                Madrid: Royal Palace, Sabatini Gardens, Campo de Moro<br/>
                Seville: Flamenco Show, Reales Alcázares, and River Guadalquivir cruise<br/>
                Barcelona: Shopping in Las Ramblas, Columbus monument, Montjuïc Mountain<br/>
                <br/>
                <button className="button4"><a href="https://traveltriangle.com/tour-packages/europe" className="linktext">Book Now</a></button>
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
export default Europe;