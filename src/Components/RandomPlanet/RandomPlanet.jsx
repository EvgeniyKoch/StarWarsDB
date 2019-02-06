import React, { Component } from 'react';
import Spiner from '../Spiner/Spiner';
import SwapiService from '../../Services/services';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  getIdRandomPlanet() {
    return Math.floor(Math.random() * 20) + 2;
  }

  onPlanetLoaded = (planet) => {
    this.setState({ 
      planet,
      loading: false
    });
  }

  updatePlanet() {
    const id = this.getIdRandomPlanet();
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render() {
    
    const { planet: { id, name, population, rotationPeriod, diameter },
            loading } = this.state;

    if(loading) {
      return <Spiner />
    }

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>1{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}