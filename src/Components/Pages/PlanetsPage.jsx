import React, { Component } from 'react';
import { PlanetDetails, PlanetList } from '../SwComponent';
import Row from '../Row';

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null,
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    );
  }
}
