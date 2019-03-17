import React from 'react';

import ItemList from '../ItemList';
import withData from '../hoc-helpers/withData';
import withSwapiService from '../hoc-helpers/with-swapi-service';
import withChildrenFunction from '../hoc-helpers/with-children-function';
import compose from '../hoc-helpers/compose';

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
