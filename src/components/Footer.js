import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './home.css';

function Footer(){
    return(
        <div>
        <img src="../images/plane.png" className="s-img" alt="plane" />
        <div className="s-contact">
        <h1>Contact Us</h1>
        <h3> &#x260E; 9920431220 | Instagram: Travel.Diary |<strong className="s-fb"> f </strong> &nbsp; TravelDiary </h3>
        </div>
        <img src="../images/last.jpeg" className="s-img1" alt="plane" />
        </div>
    )
}
export default Footer;