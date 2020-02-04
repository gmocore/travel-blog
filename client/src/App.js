import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Nav from './components/Nav';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import history from './utils/history'
import { useAuth0 } from './react-auth0-spa';

const App = () => {
  const { loading } = useAuth0();
  if (loading) {
    return (
      <div>
        Loading..
      </div>

    )
  }
  return (
    <Router history={history}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/blog" component={Blog}/>
        <PrivateRoute exact path="/profile" component={Profile} />
      </Switch>
    </Router>
   
  );
}

export default App;
