export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResurse(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error (`Could not fetch ${this._apiBase}${url}, is status ${res.status}`)
    }
    return await res.json();
  }
  
  async getAllPeople() {
    const res = await this.getResurse(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getAPerson(id) {
    const person = await this.getResurse(`/people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllPlanets() {
    const res = await this.getResurse(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResurse(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllStarShips() {
    const res = await this.getResurse(`/starships/`);
    return res.results.map(this._transformStarShip);
  }
  
  async getStarShip(id) {
    const starship = await this.getResurse(`/starships/${id}`);
    return this._transformStarShip(starship);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    const id = this._extractId(planet); 
    return {
      id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformStarShip(starship) {
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
    }
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }
}
