import React, { Component } from 'react';

import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import ErrorBoundary from '../ErrorBoundry/ErrorBoundry';
import Row from '../Row/Row';
import SwapiService from '../../Services/services';

import './PeoplePage.css';


export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 11  
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  }

  render() {

    const itemList = (
        <ItemList 
          onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllPeople}>

          {(i) => (
            `${i.name} (${i.birthYear})`
          )}

        </ItemList>
    );

    const personDetails = (
        <ItemDetails itemId={this.state.selectedPerson} />
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
