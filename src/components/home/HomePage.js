import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';

const HomePage = () => (
  <div>
    <div className="jumbotron home-background">
      <h1 className="home-title">Code Vibe</h1>
      <p className="home-p">Where dreams come true...</p>
      <Link to="about" className="btn btn-success btn-lg">
        Learn more
      </Link>
    </div>
    <div className="jumbotron home-background-two">
      <h1 className="home-title-two">Be a part of the development world</h1>
      <p className="home-p-two">Sign up and join on our contact list</p>
      <Link to="contact" className="btn btn-success btn-lg">
        Sign up
      </Link>
      <p className="home-p-two" style={{marginTop:"3%"}} >or check out our contact list.</p>
      <Link to="/contacts"  className="btn btn-success btn-lg">
        Contacts
      </Link> 
    </div>
  </div>
);

export default HomePage;