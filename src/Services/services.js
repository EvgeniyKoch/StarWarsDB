export default class SwapiService {

  _apiBase = 'https://swapi.co/api';
  _apiImage = 'https://starwars-visualguide.com/assets/img';

  getResurse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error (`Could not fetch ${this._apiBase}${url}, is status ${res.status}`)
    }
    return await res.json();
  };
  
  getAllPeople = async () => {
    const res = await this.getResurse(`/people/`);
    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResurse(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResurse(`/planets/`);
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResurse(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarShips = async () => {
    const res = await this.getResurse(`/starships/`);
    return res.results.map(this._transformStarShip);
  };
  
  getStarShip = async (id) => {
    const starship = await this.getResurse(`/starships/${id}`);
    return this._transformStarShip(starship);
  };

  getPersonImage = ({ id }) => {
    return `${this._apiImage}/characters/${id}.jpg`;
  }
  
  getStarshipImage = ({ id }) => {
    return `${this._apiImage}/starships/${id}.jpg`;
  }
  
  getPlanetImage = ({ id }) => {
    return `${this._apiImage}/planets/${id}.jpg`;
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    const id = this._extractId(planet); 
    return {
      id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformStarShip = (starship) =>  {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    };
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      height: person.height,
      mass: person.mass
    };
  }
}
