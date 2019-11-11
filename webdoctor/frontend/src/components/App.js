import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import AppNavbar from './layout/AppNavbar';
import Home from '../containers/Home';
import Appointments from './Appointments';
import Patients from './PatientForm';
import PatientList from '../containers/PatientListView';
import About from '../containers/About';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
// import ChatApp from '../assets/ChatApp';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <AppNavbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/appointments/" component={Appointments} />
              <Route exact path="/patient/" component={Patients} />
              <Route exact path="/patientslist/" component={PatientList} />
              <Route exact path="/about-us/" component={About} />
              <Route exact path="/login/" component={Login} />
              <Route exact path="/signup/" component={Signup} />
              {/* <Route exact path="/chat/" component={ChatApp} /> */}
            </Switch>
          </>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
