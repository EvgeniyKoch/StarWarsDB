import React, { Component } from 'react';
import SwapiService from '../../Services/services';
import Spiner from '../Spiner/Spiner';

import './ItemDetails.css';

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true
  }
  
  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId } = this.props;
  
    if (!itemId) {
      return;
    }

    this.swapiService
      .getPerson(itemId)
      .then((item) => {
        this.setState({ 
          item,
          loading: false 
      })
      })
  }

  render() {

    if (!this.state.item) {
      return <p style={
          {
            color:'coral',
            fontSize: '28px',
            textAlign: 'center'
          }
        }>Select a person from a list!</p>
    }

    const { item, loading } = this.state;
    const spinner = loading ? <Spiner /> : null;
    const content = !loading ? < PersonItem item={item} /> : null;

    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    )
  }
}

const PersonItem = ({ item }) => {
  const { id, name, gender, birthYear, 
          eyeColor, height, mass } = item;

  return (
    <>
      <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year:</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color:</span>
              <span>{eyeColor}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Height:</span>
              <span>{height}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Mass:</span>
              <span>{mass}</span>
            </li>
          </ul>
        </div>
    </>
  )
}
