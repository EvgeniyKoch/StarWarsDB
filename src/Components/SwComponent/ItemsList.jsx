import React from 'react';

import ItemList from '../ItemList/ItemList';
import withData from '../hoc-helpers/withData';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const withChildrenFunction = (Wrapped, func) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {func}
      </Wrapped>
    )
  };
};

const mapPersonMethodsToProps = (swapiSercice) => {
  return {
    getData: swapiSercice.getAllPeople
  }
};

const mapStarshipsMethodsToProps = (swapiSercice) => {
  return {
    getData: swapiSercice.getAllStarShips
  }
};

const mapPlanetMethodsToProps = (swapiSercice) => {
  return {
    getData: swapiSercice.getAllPlanets
  }
};

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ name, model }) => <span>{name} ({model})}</span>;

const PersonList = withSwapiService(
                      withData(
                        withChildrenFunction(ItemList, renderName)),
                        mapPersonMethodsToProps);

const PlanetList = withSwapiService(
                      withData(
                        withChildrenFunction(ItemList, renderName)),
                        mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
                      withData(
                        withChildrenFunction(ItemList, renderModelAndName)),
                        mapStarshipsMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};
