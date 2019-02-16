import React from 'react';

import ItemList from '../ItemList/ItemList';
import SwapiService from '../../Services/services';
import withData from '../hoc-helpers/withData';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllStarShips,
  getAllPlanets
} = swapiService;

const withChildrenFunction = (Wrapped, func) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {func}
      </Wrapped>
    )
  };
};

const renderName = ({ name }) => <span>{name}</span>
const renderModelAndName = ({ name, model }) => <span>{name} ({model})}</span>

const PersonList = withData(
                    withChildrenFunction(ItemList, renderName),
                    getAllPeople);

const PlanetList = withData(
                   withChildrenFunction(ItemList, renderName),
                   getAllPlanets);

const StarshipList = withData(
                     withChildrenFunction(ItemList, renderModelAndName),
                     getAllStarShips);

export {
  PersonList,
  PlanetList,
  StarshipList
};
