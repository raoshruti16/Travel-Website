import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './home.css';

function Home(){
    return(
        <div>
     <div  style={ban}>
              <img src="../images/banner.jpg" className="s-banner" alt="banner" />
        
      </div>
      <hr/> <hr/>
      <div className ="s-text">
            <p>
            <img src="../images/home1.jpeg" />
            <img src="../images/home2.jpeg" />
            <img src="../images/home3.jpeg" />
            <img src="../images/home4.jpg" />
            <img src="../images/home6.jpg" />
        </p> <hr/> <hr/> 
            <div className="s-top-right">We Plan Your Dreams &hearts; </div>
            <hr/> <hr/>
      </div> 
      </div>
    )
}
const ban = {
    top:'100',
    textAlign: 'center',  
}

export default Home;