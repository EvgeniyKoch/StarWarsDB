import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import { SwapiServiceConsumer } from '../SwapiServiceContex/SwapiServiceContex';

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
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
        }
      }
    </SwapiServiceConsumer>
  )
};

export default PlanetDetails;