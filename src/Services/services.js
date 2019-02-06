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
    return res.results
  }

  getAPerson(id) {
    return this.getResurse(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResurse(`/planets/`);
    return res;
  }

  async getPlanet(id) {
    return this.getResurse(`/planets/${id}/`);
  }

  async getAllStarShips() {
    const res = await this.getResurse(`/starships/`);
    return res;
  }
  
  getStarShip(id) {
    return this.getResurse(`/starships/${id}`);
  }
}
