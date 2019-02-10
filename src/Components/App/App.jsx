import React, { Component } from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet//RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersoneDetails from '../PersonDetails/PersonDetails';

import './App';

export default class App extends Component {
  
  state = {
    selectedPerson: null
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersoneDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    )
  }
}