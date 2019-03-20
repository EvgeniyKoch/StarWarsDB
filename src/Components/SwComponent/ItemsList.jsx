import React from 'react';

import ItemList from '../ItemList';
import withData from '../hoc-helpers/withData';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import withChildrenFunction from '../hoc-helpers/with-children-function';
import compose from '../hoc-helpers/compose';

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};

const mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarShips
  }
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ name, model }) => <span>{name} ({model})</span>;

const PersonList = compose(
                      withSwapiService(mapPersonMethodsToProps),
                      withData,
                      withChildrenFunction(renderName)
                    )(ItemList);

const PlanetList = compose(
                      withSwapiService(mapPlanetMethodsToProps),
                      withData,
                      withChildrenFunction(renderName)
                    )(ItemList);

const StarshipList = compose(
                        withSwapiService(mapStarshipsMethodsToProps),
                        withData,
                        withChildrenFunction(renderModelAndName)
                      )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList,
};
