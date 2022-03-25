import React from 'react';
import './landing.css';
import { NavLink } from 'react-router-dom';
import home from '../assets/home.PNG';


const Landing = () => (
  <div className="header section__padding" >
    <div className="header-content">
      <h1 className="gradient__text">Welcome to CRF-Art Online Shop! </h1>
      <h2 className="gradient__text">Enter to browse unique ceramic items unlike anything else out there.</h2>
      <p>My name is Cortney and this is my ceramics shop. As an artist, I have always been attracted to the imaginative and the bizarre, which brings a dark fantasy, witchy, and sci-fi quality to my work that is both whimsical and elegant. Each piece is hand thrown, pained and glazed. Through my work I hope to bring a little magic into the world. </p>

      <div className="header-content__input">
        <NavLink to="/Shop">
          <button type="button">Check it out</button>
        </NavLink>
      </div>
    </div>

    <div className="header-image">
      <img src={home} />
    </div>
  </div>
);

export default Landing;
