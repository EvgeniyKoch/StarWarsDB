import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet//RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersoneDetails from '../PersonDetails/PersonDetails';

import './App';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersoneDetails />
          </div>
        </div>
      </div>
    )
  }
}