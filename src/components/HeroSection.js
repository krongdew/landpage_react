import React from "react";
import './HeroSection.css';
import {Button} from './Button';
import '../App.css'

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src='url(/landpage_react/static/media/img-1.53f4843759ebec256cb9.jpg)' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        </div>
    </div> 
  );
};

export default HeroSection;
