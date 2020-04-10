import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './Adoption.scss';
import config from '../config';

export class Adoption extends Component {
  state = {
    users: [],
    dogs: [],
    cats: [],
    value: '',
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/people`),
      fetch(`${config.API_ENDPOINT}/api/pets`),
    ]).then(([peopleRes, petsRes]) => {
      if (!peopleRes.ok) return peopleRes.json().then((e) => Promise.reject(e));
      if (!petsRes.ok) return petsRes.json().then((e) => Promise.reject(e));
      return Promise.all([peopleRes.json(), petsRes.json()])
        .then(([people, pets]) => {
          this.setState({ people, pets });
        })
        .catch((error) => {});
    });
  }

  handleSignUp() {

  }

  handleAdopt() {
    
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="Adoption">
        <div className="nav-bar">
          <Link className="home-link" to={'/'}>
            Petful
          </Link>
        </div>

        <div className="adoption-info">
          <p className="intro-text">
            Welcome to the adoption page! Cats and dogs are available for
            adoption based on how long they've been with us. Please input your
            name to be added to the list. Once it's your turn, you may choose to
            adopt the dog or cat who is currently up for adoption.
          </p>
        </div>
        <div className="waitlist">
          <h3 className="waitlist-header">Waitlist</h3>
          <ul className="user-list">
            <li>user 1</li>
            <li>user 2</li>
            <li>user 3</li>
            <li>user 4</li>
          </ul>
        </div>

        <div className="waitlist-form-container">
          <form className="waitlist-form">
            <label htmlFor="adopter-name">Add Name: </label>
            <input
              id="adopter-name"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button type="submit">Enter</button>
          </form>
        </div>

        <main className="pets-container">
          <div className="cats-container">
            <h2 className="cats-header">Cats</h2>
          </div>
          <div className="dogs-container">
            <h2 className="dogs-header">Dogs</h2>
          </div>
        </main>
      </div>
    );
  }
}

export default Adoption;
