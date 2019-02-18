import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { SwapiServiceConsumer } from '../SwapiServiceContex/SwapiServiceContex';


const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarShip, getStarshipImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  )
};

export default StarshipDetails;