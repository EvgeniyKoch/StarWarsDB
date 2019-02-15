import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet//RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import SwapiService from '../../Services/services';
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import './App';


export default class App extends Component {

  swapiService = new SwapiService();

  render() {

    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    )
  }
}