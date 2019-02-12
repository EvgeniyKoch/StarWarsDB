import React, { Component } from 'react';
import SwapiService from '../../Services/services';
import Spiner from '../Spiner/Spiner';

import './PersonDetails.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  }
  
  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
  
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({
          person,
          loading: false
        })
      })
      .catch();
  }

  render() {

    if (!this.state.person) {
      return <p style={
          {
            color:'coral',
            fontSize: '28px',
            textAlign: 'center'
          }
        }>Select a person from a list!</p>
    }

    const { person, loading } = this.state;
    const spinner = loading ? <Spiner /> : null;
    const content = !loading ? < PersonItem person={person} /> : null;

    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    )
  }
}

const PersonItem = ({ person }) => {

  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <>
      <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
    </>
  )
}
