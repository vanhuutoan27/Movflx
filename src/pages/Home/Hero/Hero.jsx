import React from 'react';
import { Link } from 'react-router-dom';

import './Hero.scss';

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-container content">
        <div className="hero-left">
          <h6 className="sub-title">Movflx</h6>
          <h2 className="title">
            Unlimited <span>Movie</span>, TVs Shows, & More.
          </h2>
          <div className="hero-meta">
            <ul>
              <li className="quality">
                <span>PG 18</span>
                <span>HD</span>
              </li>
              <li className="category">
                <Link>Romance, </Link>
                <Link>Drama</Link>
              </li>
              <li className="release-time">
                <span>2021</span>
                <span>128 min</span>
              </li>
            </ul>
          </div>
          <Link className="btn">Watch Now</Link>
        </div>
        <div className="hero-right"></div>
      </div>
    </div>
  );
}

export default Hero;
