import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const StarshipDetails = (props) => {
  return (
    <ItemDetails { ...props }>
      <Record field="model" label="Model:"/>
      <Record field="manufacturer" label="Manufacturer:"/>
      <Record field="length" label="Length:"/>
      <Record field="crew" label="Crew:"/>
      <Record field="passengers" label="Passengers:"/>
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarShip,
    getImageUrl: swapiService.getStarshipImage
  }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);