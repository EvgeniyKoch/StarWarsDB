import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet//RandomPlanet';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import SwapiService from '../../Services/services'; 
import { SwapiServiceProvider } from '../SwapiServiceContex/SwapiServiceContex';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../SwComponent';

import './App';

export default class App extends Component {

  swapiService = new SwapiService();
  
  render() {
    
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="container">
            <Header />
            <RandomPlanet/> 
            <PersonDetails itemId={11} />
            <PlanetDetails itemId={12} />
            <StarshipDetails itemId={10} />
            <PersonList />
            <StarshipList />
            <PlanetList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}