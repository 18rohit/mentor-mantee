import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './screens/LandingPage.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Peoples from './screens/Peoples.js';
import Signup from './screens/signup';
import mentorLogin from './screens/mentorLogin';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact={true} component={LandingPage} />
            <Route path="/peoples" exact={true} component={Peoples}/>
            <Route path="/signup" exact={true} component={Signup}/>
            <Route path="/mentor-login" exact={true} component={mentorLogin}/>
        </Switch>
    </Router>, document.getElementById('root')

);
