import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav';
import Home from './pages/home';
import Events from './pages/events'; 
import Blog from './pages/blog'; 
import SingleBlog from './pages/single-blog';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import './index.css';

const App = () => (
  <Router> 
    <Nav /> 
    <Switch>
      <Route path="/" exact component={Home}/> 
      <Route path="/events" component={Events}/> 
      <Route exact path="/blog" component={Blog}/> 
      <Route path="/blog/:slug" component={SingleBlog} />
    </Switch>
  </Router>
); 

ReactDOM.render(<App/>, document.getElementById('root')); 
