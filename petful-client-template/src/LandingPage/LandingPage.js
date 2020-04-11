import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

export class LandingPage extends Component {
  render() {
    return (
      <main className="LandingPage">
        <h1 className="header">Welcome to Petful!</h1>
        <img
          className="dogcat"
          src={require('../images/dogcat.jpg')}
          alt="Dog Cat"
        />
        <p>
          We operate on a{' '}
          <span className="first-come">first-come, first-served</span> basis. If
          you would like to adopt one of our furry friends, click the button
          below and add your name to the adoption list! Cats and dogs who have
          been with us the longest will be the first ones available for
          adoption.
        </p>
        <Link to="/adoption" className="adopt-button">
          <p>Adopt Now!</p>
        </Link>
      </main>
    );
  }
}

export default LandingPage;
