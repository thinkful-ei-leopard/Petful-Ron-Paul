import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    // get all people and pets on component
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

  handleSignUp = (name) => {
    // e.preventDefault();
    console.log(this.state.cats);
    fetch(`${config.API_ENDPOINT}/api/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  };

  handleAdopt = (type, both = false) => {
    console.log(type, both);
    // e.preventDefault();
    fetch(`${config.API_ENDPOINT}/api/pets`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        type,
        both,
      }),
    });
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

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
            adopt the dog or cat who is currently up for adoption (or get them both!).
          </p>
        </div>
        <div className="waitlist">
          <h3 className="waitlist-header">Waitlist</h3>
          <ul className="user-list">
            <li>{people.allPeople[0]}</li>
            <li>{people.allPeople[1]}</li>
            <li>{people.allPeople[2]}</li>
            <li>{people.allPeople[3]}</li>
          </ul>
        </div>

        <div className="waitlist-form-container">
          <form className="waitlist-form" autoComplete="off">
            <label htmlFor="adopter-name">Add your name: </label>
            <input
              id="adopter-name"
              autoComplete="off"
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
            <h2 className="cats-header">Next available cat</h2>
            <div className="cat-info">
              <img
                className="available-cat-image"
                src={cats[0].imageURL}
                alt={cats[0].description}
              />
              <p className="cat-name">
                <span>name:</span> {cats[0].name}{' '}
              </p>
              <p className="cat-age">
                <span>age:</span> {cats[0].age}{' '}
              </p>
              <p className="cat-gender">
                <span>gender:</span> {cats[0].gender}{' '}
              </p>
              <p className="cat-breed">
                <span>breed:</span> {cats[0].breed}{' '}
              </p>
              <p className="cat-story">
                <span>story:</span> {cats[0].story}{' '}
              </p>
            </div>
            <div className="center">
              <button
                className="adopt-button"
                type="submit"
                onClick={() => this.handleAdopt('cats')}>
                Adopt Me!
              </button>
            </div>
          </section>

          <div className="center-both">
          <button
            className="both-button"
            type="submit"
            className="adopt-button both"
            onClick={() => this.handleAdopt('', true)}>
            Adopt both!
          </button>
        </div>

          <section className="dogs-container">
            <h2 className="dogs-header">Next available dog</h2>
            <div className="dog-info">
              <img
                className="available-dog-image"
                src={dogs[0].imageURL}
                alt={dogs[0].description}
              />
              <p className="dog-name">
                <span>name:</span> {dogs[0].name}
              </p>
              <p className="dog-age">
                <span>age:</span> {dogs[0].age}{' '}
              </p>
              <p className="dog-gender">
                <span>gender:</span> {dogs[0].gender}
              </p>
              <p className="dog-breed">
                <span>breed:</span> {dogs[0].breed}
              </p>
              <p className="dog-story">
                <span>story:</span> {dogs[0].story}
              </p>
            </div>
            <div className="center">
              <button
                className="adopt-button"
                type="submit"
                onClick={() => this.handleAdopt('dogs')}>
                Adopt Me!
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Adoption;
