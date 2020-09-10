import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';

const App = () => {
  return (
    <Router basename={'/weather'}>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
