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
    name: '',
  };

  componentDidMount() {
    this.getPeopleAndPets();
  }

  getPeopleAndPets = async () => {
    // get all people and pets on component
    // this.setState({ loading: true });
    const [peopleRes, petsRes] = await Promise.all([
      fetch(`${config.API_ENDPOINT}/api/people`),
      fetch(`${config.API_ENDPOINT}/api/pets`),
    ]);
    if (!peopleRes.ok) return peopleRes.json().then((e) => Promise.reject(e));
    if (!petsRes.ok) return petsRes.json().then((e_1) => Promise.reject(e_1));
    try {
      const [people, pets] = await Promise.all([
        peopleRes.json(),
        petsRes.json(),
      ]);
      this.setState({
        people,
        cats: pets.cats,
        dogs: pets.dogs,
        loading: false,
      });
    } catch (error) {}
  };

  handleSignUp = async (e, name) => {
    e.preventDefault();
    this.setState({ name });
    // * POST NEW PERSON
    await fetch(`${config.API_ENDPOINT}/api/people`, {
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
    this.getPeopleAndPets();
    this.startQueue();
  };

  startQueue = () => {
    const { name, people } = this.state;
    if (name !== people.allPeople[0]) {
      return setInterval(() => {
        const { name, people } = this.state;
        console.log(name, people.allPeople[0]);
        if (name === people.allPeople[0]) {
          clearInterval();
          return;
        }
        this.handleAdopt('', '', true);
      }, 5000);
    } else {
      clearInterval();
    }
  };

  // startQueue = async () => {
  //   return await new Promise((resolve) => {
  //     const interval = setInterval(() => {
  //       const { name, people } = this.state;
  //       console.log(name, people.allPeople[0]);
  //       if (name === people.allPeople[0]) {
  //         clearInterval(interval);
  //       }
  //       this.handleAdopt('', '', true);
  //     }, 5000);
  //   });
  // };

  handleAdopt = async (e, type, both = false) => {
    console.log(type, both);
    // e.preventDefault();
    await fetch(`${config.API_ENDPOINT}/api/pets`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        type,
        both,
      }),
    });
    await this.getPeopleAndPets();
  };

  handleChange = (event) => {
    event.preventDefault();
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
            adopt the dog or cat who is currently up for adoption (or get them
            both!).
          </p>
        </div>
        <div className="waitlist">
          <h3 className="waitlist-header">Waitlist</h3>
          <ul className="user-list">
            <li>{people.allPeople[0]}</li>
            <li>{people.allPeople[1]}</li>
            <li>{people.allPeople[2]}</li>
            <li>{people.allPeople[3]}</li>
            <li>{people.allPeople[4]}</li>
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
            <button
              type="submit"
              onClick={(e) => {
                this.handleSignUp(e, this.state.value);
                this.setState({ value: '' });
              }}>
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
                onClick={(e) => this.handleAdopt(e, 'cats')}>
                Adopt Me!
              </button>
            </div>
          </section>

          <div className="center-both">
            <button
              className="both-button"
              type="submit"
              className="adopt-button both"
              onClick={(e) => this.handleAdopt(e, '', true)}>
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
                onClick={(e) => this.handleAdopt(e, 'dogs')}>
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
