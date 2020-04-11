import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './Adoption.scss';
import config from '../config';

export class Adoption extends Component {
  state = {
    people: [],
    dogs: [],
    cats: [],
    value: '',
    loading: true,
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
          this.setState({
            people,
            cats: pets.cats,
            dogs: pets.dogs,
            loading: false,
          });
        })
        .catch((error) => {});
    });

    console.log(this.state.cats);
  }

  handleSignUp = (e) => {
    e.preventDefault();
    console.log(this.state.cats);
  };

  handleAdopt = (e) => {
    e.preventDefault();

    fetch(`${config.API_ENDPOINT}/api/pets/`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(() => {
        // this.setState({ loading: true });
      })
      .catch(() => {});
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    if (this.state.loading) {
      return <></>;
    }

    const { cats, dogs, people } = this.state;
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
            <button type="submit" onClick={this.handleSignUp}>
              Enter
            </button>
          </form>
        </div>

        <main className="pets-container">
          <section className="cats-container">
            <h2 className="cats-header">Cats</h2>
            <img src="" alt="" />
            <div className="cat-info">
              <img
                className="available-cat-image"
                src={cats[0].imageURL}
                alt={cats[0].description}
              />
              <p className="cat-name">name: {cats[0].name} </p>
              <p className="cat-age">age: {cats[0].age} </p>
              <p className="cat-gender">gender: {cats[0].gender} </p>
              <p className="cat-breed">breed: {cats[0].breed} </p>
              <p className="cat-story">story: {cats[0].story} </p>
            </div>
          </section>
          <section className="dogs-container">
            <h2 className="dogs-header">Dogs</h2>
            <div className="dog-info">
            <img
              className="available-dog-image"
              src={dogs[0].imageURL}
              alt={dogs[0].description}
            />
              <p className="dog-name">name: {dogs[0].name}</p>
              <p className="dog-age">age: {dogs[0].age} </p>
              <p className="dog-gender">gender: {dogs[0].gender}</p>
              <p className="dog-breed">breed: {dogs[0].breed}</p>
              <p className="dog-story">story: {dogs[0].story}</p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Adoption;
