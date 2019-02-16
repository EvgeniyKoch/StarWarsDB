import React from 'react';

import ItemList from '../ItemList/ItemList';
import SwapiService from '../../Services/services';
import withData from '../hoc-helpers/withData';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';

const swapiService = new SwapiService();
const {
  getPerson,
  getPlanet,
  getStarShip,
  getStarshipImage,
  getPlanetImage,
  getPersonImage
} = swapiService;



const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}>
      <Record field="gender" label="Gender:"/>
      <Record field="eyeColor" label="Eye Color:"/>
      <Record field="birthYear" label="Birth Year:"/>
      <Record field="height" label="Height:"/>
      <Record field="mass" label="Mass:"/>
    </ItemDetails>
  )
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}>
      <Record field="population" label="Population:"/>
      <Record field="rotationPeriod" label="RotationPeriod:"/>
      <Record field="diameter" label="Diameter:"/>
    </ItemDetails>
  )
};

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarShip}
      getImageUrl={getStarshipImage}>
      <Record field="model" label="Model:"/>
      <Record field="manufacturer" label="Manufacturer:"/>
      <Record field="length" label="Length:"/>
      <Record field="crew" label="Crew:"/>
      <Record field="passengers" label="Passengers:"/>
    </ItemDetails>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};