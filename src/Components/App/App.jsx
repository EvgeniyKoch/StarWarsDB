import React, { Component } from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../Services/services';

import { PeoplePage, PlanetsPage, StarshipsPage } from '../Pages';
import { SwapiServiceProvider } from '../SwapiServiceContex';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';
import { StarshipDetails } from '../SwComponent';
import LoginPage from '../Pages/LoginPage';
import SecretPage from '../Pages/SecretPage';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    isLoggedIn: false,
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="container">
              <Header />
              <RandomPlanet/>
              <Switch>
                <Route path="/" exact render={() => <h2>Welcome to StarDB!</h2>} />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />
                  }}
                />
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin}
                    />
                  )} 
                />
                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage
                      isLoggedIn={isLoggedIn}
                    />
                  )}
                />
                <Route render={() => <h2>Page not found...</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}