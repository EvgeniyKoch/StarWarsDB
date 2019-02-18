import React from 'react';

import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
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

export default withSwapiService(PersonDetails);