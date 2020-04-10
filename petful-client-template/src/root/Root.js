import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Adoption from '../Adoption/Adoption'
import LandingPage from '../LandingPage/LandingPage'

export class Root extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path={'/'} component={LandingPage} />
          <Route exact path={'/adoption'} component={Adoption} />
        </Switch>
      </div>
    );
  }
}

export default Root;
