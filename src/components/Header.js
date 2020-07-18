import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './header.css';
import Japan from './Japan.jpg.jsx';


function Header() {
 
  return (
      <div className= "navbar">
    <header style={headerStyle}>
      <h1> <pre> &#x1F6EB;  T R A V E L    D I A R Y  &#x1F6EB; </pre>  </h1>
      </header>
      <div>
      <ul>
        <li><a class="active" href="/">Home</a></li>
        <li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn">Japan</a>
        <div class="dropdown-content">
        <a href="Japan.jpg.jsx">Tokyo – Essence Of Japan</a>
        <a href="Japan.jpg.jsx">Kyoto – Sacred And Serene</a>
        <a href="Japan.jpg.jsx">Nara – City Of Culture</a>
        </div>
        </li>
        <li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn">China</a>
        <div class="dropdown-content">
        <a href="China.jpg.jsx">Forbidden City</a>
        <a href="China.jpg.jsx">West Lake, Hangzhou</a>
        <a href="China.jpg.jsx">Great Wall Of China</a>
        </div>
        </li>
        <li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn">India</a>
        <div class="dropdown-content">
        <a href="India.jpg.jsx">Kerala: Known For Its Backwaters</a>
        <a href="India.jpg.jsx">Ladakh – Famous Film-Spot!</a>
        <a href="India.jpg.jsx">Gangtok: Ideal For Nature Lovers!</a>
        </div>
        </li>

        <li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn">Europe</a>
        <div class="dropdown-content">
        <a href="Europe.jpg.jsx">Best Of Switzerland And France</a>
        <a href="Europe.jpg.jsx">Through The Lanes Of Italy</a>
        <a href="Europe.jpg.jsx">Exploring Spain</a>
        </div>
        </li>

        <li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn">USA</a>
        <div class="dropdown-content">
        <a href="USA.jpg.jsx"> New York</a>
        <a href="USA.jpg.jsx">Los Angeles</a>
        <a href="USA.jpg.jsx">Sedona And The Grand Canyon</a>
        </div>
        </li>

        <li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn">Australia</a>
        <div class="dropdown-content">
        <a href='Aus.jpg.jsx'>Great Ocean Road – Spectacular Formations</a>
        <a href= 'Aus.jpg.jsx'>Fraser Island – For A Pleasant Weather</a>
        <a href= 'Aus.jpg.jsx'>Blue Mountains National Park</a>
        </div>
        </li>
     
    </ul>
  </div>
        </div>
     
    
  )
}



const headerStyle = {
  background: '#008080',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  fontStyle : 'cursive'
}

export default Header;
