import React, { Component } from 'react';

import './ItemLIst.css';
import SwapiService from '../../Services/services';
import Spiner from '../Spiner/Spiner';

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: null
  }

  componentDidMount() {

    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState( { peopleList })
      });
  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return(
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      )
    });
  }

  render() {

    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spiner />
    }

    const item = this.renderItems(peopleList);
    
    return (
      <ul className="item-list list-group">
        {item}
      </ul>
    );
  }
}