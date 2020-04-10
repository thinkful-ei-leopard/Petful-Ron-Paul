import React from 'react';
import { Router, Link } from 'react-router-dom';

function Root() {
  return (
    <div>
      <h1>Welcome to Petful!</h1>

      <img src="../../images/dogcat.jpeg" alt="Dog and Cat" />

      <p>
        We operate on a first-come, first-served basis. If you would like to
        adopt one of our furry friends, click the button below and add your name
        to the adoption list! Cats and dogs who have been with us the longest
        will be the first ones available for adoption.
      </p>

      <Link to="/adoption"></Link>
    </div>
  );
}

export default Root;
