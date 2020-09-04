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
      <h1 className="home-title-two">Contact list</h1>
      <p className="home-p-two">Sign up and join on our contacts list.</p>
      <Link to="contact" className="btn btn-success btn-lg">
        Sign up
      </Link>
    </div>
  </div>
);

export default HomePage;