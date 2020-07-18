import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AlbumMaker from './components/AlbumMaker';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Japan from './components/Japan.jpg.jsx';
import China from './components/China.jpg.jsx';
import India from './components/India.jpg.jsx';
import Europe from './components/Europe.jpg.jsx';
import USA from './components/USA.jpg.jsx';
import Aus from './components/Aus.jpg.jsx';


import './App.css';
import { render } from '@testing-library/react';

function App() {
  render() 
    return (
      <div>
        <Header/>
        <Router>
        <Route path="/Japan.jpg.jsx" component={Japan} />
        <Route path="/China.jpg.jsx" component={China} />
        <Route path="/India.jpg.jsx" component={India} />
        <Route path="/Europe.jpg.jsx" component={Europe} />
        <Route path="/USA.jpg.jsx" component={USA} />
        <Route path="/Aus.jpg.jsx" component={Aus} />
       
        <Home/>
      
        <div className="App">
          <div className="container">
            <AlbumMaker/>
            <Route exact path="/"
              render={props => (
                <React.Fragment>
                </React.Fragment>
              )}
            />
           
          </div>
        </div>
      </Router>
      <Footer/>
      </div>
    );
  }


export default App;
