import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import PersoneDetails from '../PersonDetails/PersonDetails';
import ErrorIndicator from '../Error/ErrorIndicator';

import './PeoplePage.css';

export default class PeoplePage extends Component {

  state = {
    selectedPerson: null,
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
       <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersoneDetails  personId={this.state.selectedPerson} />
          </div>
        </div>
    )
  }
}
