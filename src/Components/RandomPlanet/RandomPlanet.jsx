import React, { Component } from 'react';
import Spiner from '../Spiner/Spiner';
import ErrorIndicator from '../Error/ErrorIndicator';
import SwapiService from '../../Services/services';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 3000);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ 
      planet,
      loading: false
    });
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 20) + 3;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    
    const { planet, loading, error } = this.state;

    const spinner = loading ? <Spiner /> : null;
    const content = !loading && !error ? <PlanetView planet={planet} /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    
    return (
      <div className="random-planet jumbotron rounded">
        { spinner }
        { content }
        { errorMessage }
      </div>
    );
  }
}

const PlanetView = ( { planet }) => {
      
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <>
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
    </>
  )
}